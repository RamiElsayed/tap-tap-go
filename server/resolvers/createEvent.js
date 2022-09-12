const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");

const createEvent = async (_, { input }, { user }) => {
  try {
    if (user) {
      const { _id: hostId, isHost } = user;
      if (isHost) {
        const createdEvent = await Event.create({
          ...input,
          createdBy: hostId,
        });

        const { _id: eventId } = createdEvent;

        await User.findByIdAndUpdate(hostId, {
          $push: {
            events: eventId,
          },
        });
      } else {
        throw new AuthenticationError("You must be a host to create an event.");
      }

      return reviewFromDatabase;
    } else {
      throw new AuthenticationError(
        "You must be logged in to create an event."
      );
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create event | ${err.message}`);
    throw new ApolloError("Failed to create event.");
  }
};

module.exports = createEvent;
