const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const bookmarkEvent = async (_, { eventId }, { user }) => {
  try {
    if (user) {
      console.log(eventId);

      const { _id: hostId } = user;
      await User.findByIdAndUpdate(hostId, {
        $push: {
          bookmarks: eventId,
        },
      });

      return;
    } else {
      throw new AuthenticationError("You must be a host to create an event.");
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to bookmark event | ${err.message}`);
    throw new ApolloError("Failed to bookmark event.");
  }
};

module.exports = bookmarkEvent;

