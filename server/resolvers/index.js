const { DateResolver } = require('graphql-scalars');
const user = require('./user');
const users = require('./users');
const event = require('./event');
const events = require('./events');
const tag = require('./tag');
const tags = require('./tags');
const review = require('./review');
const reviews = require('./reviews');
const createUser = require('./createUser');
const createEvent = require('./createEvent');
const createReview = require('./createReview');
const login = require('./login');
const deleteUser = require('./deleteUser');
// const deleteEvent = require('./deleteEvent');
const deleteReview = require('./deleteReview');

const resolvers = {
  Date: DateResolver,
  Query: {
    user,
    users,
    event,
    events,
    tag,
    tags,
    review,
    reviews,
  },
  Mutation: {
    createUser,
    createEvent,
    createReview,
    login,
    deleteUser,
    // deleteEvent,
    deleteReview,
  },
};

module.exports = resolvers;
