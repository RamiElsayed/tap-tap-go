const { Event } = require("../models");

const event = async (_, { eventId }) => {
  try {
    const eventFromDatabase = await Event.findById(eventId)
      .populate("createdById")
      .populate("reviews");
    console.log(eventFromDatabase);
    return eventFromDatabase;
  } catch (err) {
    console.log(`[ERROR]: Failed to get event | ${err.message}`);
    throw new ApolloError("Failed to get event");
  }
};

module.exports = event;
