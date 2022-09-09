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
const createReview = require('./createReview');
const login = require('./login');

const resolvers = {
  Date: DateResolver,
  Query: {
    users,
    user,
    events,
    event,
    tag,
    tags,
    review,
    reviews,
  },
  Mutation: {
    createUser,
    login,
    createReview,
  },
};

module.exports = resolvers;
