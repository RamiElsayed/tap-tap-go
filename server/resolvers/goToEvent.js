const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");

const goToEvent = async (_, { eventID }, { user }) => {
  try {
    if (user) {
      const { _id: hostId } = user;

      const User = await User.findByIdAndUpdate(hostId, {
        $push: {
          events: eventID,
        },
      });
      return User;
    } else {
      throw new AuthenticationError("You must be a host to create an event.");
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create event | ${err.message}`);
    throw new ApolloError("Failed to create event.");
  }
};

module.exports = goToEvent;
