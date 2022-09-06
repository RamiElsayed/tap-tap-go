const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  type User {
    _id: ID!
    firstName: String!
    flastName: String!
    number: Int!
    email: String!
    events: [Event]!
  }
  type Event {
    _id: ID
    username: String!
    eventName: String!
    location: String!
    description: String
    date: Date
    price: Int
    ageGroup: String!
    images: [String]!
    tags: [String]
    reviews: [String]
    attendees: Int!
    maxAttendees: Int!
  }
  type Query {
    users: [User]
    events: [Event]
    event(eventId: ID!): Event
    user(userId: ID!): User
  }
`;

module.exports = typeDefs;
