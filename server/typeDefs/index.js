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
    _id: ID!
    username: String!
    eventName: String!
    location: String!
    description: String
    date: Date
    price: Int
    ageGroup: String!
    images: [String]!
    tags: [Tag]
    reviews: [Review]
    attendees: Int!
    maxAttendees: Int!
  }
  type Query {
    users: [User]
    user(userId: ID!): User
    evetnts: [Event]
    event(eventId: ID!): Event
  }
`;

module.exports = typeDefs;
