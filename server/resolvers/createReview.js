const { ApolloError, AuthenticationError } = require("apollo-server");
const { Types } = require("mongoose");

const { Review, User } = require("../models");

const createReview = async (_, { input }, { user, event }) => {
  try {
    if (user) {
      const { _id: postedBy } = user;
      const { createdById: userId } = event;
      if (postedBy === userId) {
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
        throw AuthenticationError(
          "You can not create a review for your own event."
        );
      }
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
