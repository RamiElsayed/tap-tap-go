const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const purchaseTicket = async (_, { eventId }, { user }) => {
  try {
    if (user) {
      console.log(eventId);

      const { _id: hostId } = user;
      await User.findByIdAndUpdate(hostId, {
        $push: {
          events: eventId,
        },
      });
      // console.log(User);

      return;
    } else {
      throw new AuthenticationError("You must be a host to create an event.");
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create event | ${err.message}`);
    throw new ApolloError("Failed to create event.");
  }
};

module.exports = purchaseTicket;
