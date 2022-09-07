const { ScalarNameResolver } = require("graphql-scalars");
const user = require("./user");
const users = require("./users");
const event = require("./event");
const events = require("./events");
const tag = require("./tag");
const review = require("./review");

module.exports = {
  user,
  users,
  event,
  events,
  tag,
  review,
};
