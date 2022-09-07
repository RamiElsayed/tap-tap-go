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
  type Tag {
    _id: ID!
    tagName: String!
  }
  type Review {
    username: String
    title: String
    reviewText: String
    rating: String
    userId: ID
    eventId: ID
  }
  type Query {
    users: [User]
    user(userId: ID!): User
    events: [Event]
    event(eventId: ID!): Event
    tags: [Tag]
    tag(tagId: ID!): Tag
    review(reviewId: ID!): Review
  }
`;

module.exports = typeDefs;
