const { ApolloError, AuthenticationError } = require("apollo-server");

const { Review, Event, User } = require("../models");

const deleteReview = async (_, { reviewId }, { user, event }) => {
  try {
    if (user) {
      const deleteReviewFromDatabase = await Review.findByIdAndDelete(reviewId);
      await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { reviews: { reviewId } } },
        { new: true }
      );
      await Event.findOneAndUpdate(
        { _id: event._id },
        { $pull: { reviews: { reviewId } } },
        { new: true }
      );
    } else {
      throw new AuthenticationError(
        "You must be logged in to delete a review."
      );
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to delete review | ${error.message}`);
    throw new ApolloError("Failed to delete review");
  }
};
module.exports = deleteReview;
