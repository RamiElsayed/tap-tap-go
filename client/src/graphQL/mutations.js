import { gql } from "@apollo/client";

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         firstName
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

// export const ADD_USER = gql`
//   mutation createUser(
//     $firstName: String!
//     $lastName: String!
//     $username: String!
//     $number: String!
//     $email: String!
//     $password: String!
//   ) {
//     createUser(
//       firstName: $firstName
//       lastName: $lastName
//       username: $username
//       number: $number
//       email: $email
//       password: $password
//     ) {
//       token
//       user {
//         username
//       }
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation Mutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      eventName
      location {
        streetName
      }
      price
      date
      description
      ageGroup
      maxAttendees
    }
  }
`;

export const PURCHASE_TICKET = gql`
  mutation Mutation($eventId: ID!) {
    purchaseTicket(eventId: $eventId) {
      eventName
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation Mutation($input: CreateReviewInput!) {
    createReview(input: $input) {
      username
    }
  }
`;

export const BOOKMARK_EVENT = gql`
  mutation Mutation($eventId: ID!) {
    bookmarkEvent(eventId: $eventId) {
      eventName
    }
  }
`;

export const UNBOOKMARK_EVENT = gql`
  mutation UnBookmarkEvent($eventId: ID!) {
    unBookmarkEvent(eventId: $eventId) {
      eventName
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation Mutation($reviewId: ID!) {
    deleteReview(reviewId: $reviewId) {
      _id
    }
  }
`;

export const SEARCH_EVENTS_TAG_CITY = gql`
  mutation Mutation($input: searchInput!) {
    search(input: $input) {
      _id
      eventName
      price
      reviews {
        _id
        rating
      }
      images {
        imageLink
      }
    }
  }
`;
