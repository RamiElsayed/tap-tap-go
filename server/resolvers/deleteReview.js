const { ApolloError, AuthenticationError } = require("apollo-server");
const { differenceInCalendarQuarters } = require("date-fns");
const mongoose = require("mongoose");

const { Review, Event, User } = require("../models");

const deleteReview = async (_, { reviewId }, { user }) => {
  try {
    if (user) {
      const { _id } = user;

      const { eventId, postedBy } = await Review.findById(reviewId).lean();
      var userId = mongoose.Types.ObjectId(_id).toString();

      if (userId === postedBy.toString()) {
        await Review.findByIdAndDelete(reviewId);

        await User.findOneAndUpdate(
          userId,
          { $pull: { reviews: reviewId } },
          { new: true }
        );
        await Event.findOneAndUpdate(
          eventId,
          { $pull: { reviews: { reviewId } } },
          { new: true }
        );
      } else {
        console.log("Not ur review");
      }
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
