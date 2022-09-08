const { ApolloError, AuthenticationError } = require('apollo-server');
const { Types } = require('mongoose');

const { Event, Review, User } = require('../models');

const createReview = async (_, { input }, { user }) => {
  try {
    if (user) {
      const { _id: userId } = user;

      const createdReview = await Review.create({ ...input, userId });

      const { _id: reviewId, eventId } = createdReview;

      await Event.findByIdAndUpdate(eventId, {
        $push: {
          reviews: reviewId,
        },
      });

      return (reviewFromDatabase = await Review.findById(reviewId));
    } else {
      throw new AuthenticationError(
        'You must be logged in to create a Review.',
      );
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create review | ${err.message}`);
    throw new ApolloError('Failed to create Review.');
  }
};

module.exports = createReview;
