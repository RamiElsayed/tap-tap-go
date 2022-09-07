const { Date, BigInt } = require('graphql-scalars');
const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date
  scalar BigInt

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    number: BigInt!
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
    images: [Image]!
    tags: [Tag]
    reviews: [Review]
    attendees: Int!
    maxAttendees: Int!
  }

  type Tag {
    _id: ID!
    tagName: String!
    events: [Event]
  }

  type Review {
    _id: ID!
    username: String
    title: String
    reviewText: String
    rating: String
    userId: ID
    eventId: ID
  }

  type Location {
    _id: ID!
    buildingNumber: String
    streetName: String
    cityName: String
    county: String
    latitude: String
    longitude: String
    state: String
    postcode: String
    eventId: String
  }

  type Image {
    _id: ID!
    imageLink: String!
    eventId: ID!
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

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    number: Int!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: UserInput!): User
  }
`;

module.exports = typeDefs;
