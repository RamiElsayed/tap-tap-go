const { ApolloError, AuthenticationError } = require("apollo-server");

const { User } = require("../models");

const deleteUser = async (_, { userId }, { user, event }) => {
  try {
    if (user) {
      await User.findById(userId);
      await Event.findByIdAndUpdate(
        { _id: event._id },
        { $pull: { reviews: { reviewId } } },
        { new: true }
      );
    } else {
      throw new AuthenticationError("You must be logged in to delete a user.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    throw new ApolloError("Failed to delete user");
  }
};

module.exports = deleteUser;
