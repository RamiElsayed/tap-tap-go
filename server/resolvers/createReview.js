const { ApolloError, AuthenticationError } = require("apollo-server");
const { Types } = require("mongoose");

const { Review, User, Event } = require("../models");

const createReview = async (_, { input }, { user }) => {
  try {
    if (user) {
      const { _id: postedBy } = user;
      var userId = Types.ObjectId(postedBy);
      const { eventId } = input;
      const { createdById } = await Event.findById(eventId);
      if (userId.equals(createdById)) {
        throw new AuthenticationError(
          "You can not create a review for your own event."
        );
      }
      const createdReview = await Review.create({ ...input, postedBy });

      const { _id: reviewId } = createdReview;

      const reviewFromDatabase = await Review.findById(reviewId).populate(
        "postedBy"
      );

      await User.findByIdAndUpdate(postedBy, {
        $push: {
          reviews: reviewId,
        },
      });
      await Event.findByIdAndUpdate(eventId, {
        $push: {
          reviews: reviewId,
        },
      });

      return reviewFromDatabase;
    } else {
      throw new AuthenticationError(
        "You must be logged in to create a Review."
      );
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create review | ${err.message}`);
    throw new ApolloError("Failed to create Review.");
  }
};

module.exports = createReview;
