const { Event } = require('../models');

const event = async (_, { eventId }) => {
  const eventFromDatabase = await Event.findById({ eventId });
  console.log(event);
  return eventFromDatabase;
};

module.exports = event;
