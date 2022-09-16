const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User, Event, Tag } = require("../models");

const createEvent = async (_, { input }, { user }) => {
  try {
    if (user) {
      const { _id: hostId } = user;
      const createdEvent = await Event.create({
        ...input,
        createdBy: hostId,
      });

      const { _id: eventId } = createdEvent;
      input.tags.forEach(async (el) => {
        await Tag.findByIdAndUpdate(el, {
          $push: {
            events: createdEvent._id,
          },
        });
      });

      await User.findByIdAndUpdate(hostId, {
        $push: {
          myEvents: eventId,
        },
      });
      return createdEvent;
    } else {
      throw new AuthenticationError("You must be a host to create an event.");
    }
  } catch (err) {
    console.log(`[ERROR]: Failed to create event | ${err.message}`);
    throw new ApolloError("Failed to create event.");
  }
};

module.exports = createEvent;
