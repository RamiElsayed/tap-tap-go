const { DateTime, PhoneNumber } = require("graphql-scalars");
const { Event } = require("../models");

const events = async () => {
  const events = await Event.find({});
  console.log(events);
  return events;
};

module.exports = events;
