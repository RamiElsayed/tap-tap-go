const { DateTypeDefinition } = require("graphql-scalars");
const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    number: String!
    email: String!
    isHost: Boolean!
    events: [Event]
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
    createdBy: ID!
    images: [Image]
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
    rating: Int
    postedBy: User!
    associatedEvent: Event!
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    events: [Event]
    event(eventId: ID!): Event
    tags: [Tag]
    tag(tagId: ID!): Tag
    review(reviewId: ID!): Review
    reviews: [Review]
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    username: String!
    number: String!
    email: String!
    password: String!
    isHost: Boolean!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreateReviewInput {
    username: String!
    title: String!
    reviewText: String!
    rating: Int
    associatedEvent: ID!
  }
  input CreateEventInput {
    username: String
    eventName: String!
    location: String!
    description: String
    date: Date!
    price: Int!
    ageGroup: String
    images: [Image]
    tags: [Tag]!
    maxAttendees: Int!
  }
  type Mutation {
    createUser(input: CreateUserInput!): Auth
    login(input: LoginInput!): Auth
    createReview(input: CreateReviewInput!): Review
    createEvent(input: CreateEventInput!): Event
  }
`;

module.exports = typeDefs;
