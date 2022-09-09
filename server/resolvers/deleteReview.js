const { ApolloError, AuthenticationError } = require('apollo-server');

const { Review, Event } = require('../models');

const deleteReview = async (_, { reviewId }, { user }) => {
  try {
    if (user) {
      const deleteReviewFromDatabase = await Review.findByIdAndDelete(reviewId);

      //TODO: figure out logic for dlete
      // await Event.findByIdAndDelete();

      return deleteReviewFromDatabase;
    } else {
      throw new AuthenticationError(
        'You must be logged in to delete a review.',
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to delete review | ${error.message}`);
    throw new ApolloError('Failed to delete review');
  }
};
s;
module.exports = deleteReview;
