const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    flastName: String!
    number: Number!
    email: String!
    events: [Event]!
  }
  type Event {
    username: String!
eventName: String!
location: String!
description: String
date: Date
price: Number
ageGroup: String!
images: String!
tags: [String]
reviews:
attendees:
maxAttendees:
  }
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
