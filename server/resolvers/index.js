const { DateResolver } = require('graphql-scalars');
const user = require('./user');
const users = require('./users');
const event = require('./event');
const events = require('./events');
const tag = require('./tag');
const review = require('./review');
const reviews = require('./reviews');

const resolvers = {
  Date: DateResolver,
  Query: {
    users,
    user,
    events,
    event,
    tag,
    review,
  },
};

module.exports = resolvers;
