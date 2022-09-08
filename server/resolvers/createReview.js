const { ApolloError, AuthenticationError } = require('apollo-server');

const { Event, Review } = require('../models');

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

      const ReviewFromDatabase = await Review.findById(reviewId)
        .populate('userId')
        .populate('eventId');

      return ReviewFromDatabase;
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
