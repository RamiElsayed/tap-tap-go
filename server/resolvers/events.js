const { Event } = require('../models');

const events = async () => {
  try {
    const events = await Event.find({});
    console.log(events);
    return events;
  } catch (err) {
    console.log(`[ERROR]: Failed to get events | ${err.message}`);
    throw new ApolloError('Failed to get events');
  }
};

module.exports = events;
