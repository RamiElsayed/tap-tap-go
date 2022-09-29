const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const unPurchaseTicket = async (_, { eventId }, { user }) => {
  try {
    if (user) {
      const { _id: hostId } = user;
      await User.findByIdAndUpdate(hostId, {
        $pull: {
          events: eventId,
        },
      });

      return;
    } else {
      throw new AuthenticationError("You must be a host to create an event.");
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create event | ${err.message}`);
    throw new ApolloError("Failed to create event.");
  }
};

module.exports = unPurchaseTicket;
