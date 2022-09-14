const { ApolloError, AuthenticationError } = require("apollo-server");

const { Review, Event, User } = require("../models");

const deleteReview = async (_, { reviewId }, { user }) => {
  try {
    console.log(user);
    if (user) {
      const deleteReviewFromDatabase = await Review.findByIdAndDelete(reviewId);
      const { postedBy } = deleteReviewFromDatabase;
      const { eventId } = deleteReviewFromDatabase;
      await User.findOneAndUpdate(
        postedBy,
        { $pull: { reviews: reviewId } },
        { new: true }
      );
      await Event.findOneAndUpdate(
        eventId,
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
