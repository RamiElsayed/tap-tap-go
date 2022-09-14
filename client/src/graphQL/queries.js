import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($userId: ID!) {
    user(input: $userId) {
      token
      user {
        _id
        firstName
        lastName
        username
        number
        email
        bookmarks {
          ageGroup
          createdById
          attendees
          maxAttendees
        }
        events
        reviews
      }
    }
  }
`;
export const GET_PROFILEDATA = gql`
  query Query($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      username
      number
      email
      bookmarks {
        eventName
        _id
        date
        price
        location {
          _id
          cityName
          state
          postcode
          streetName
        }
      }
      reviews {
        _id
        title
        reviewText
        rating
      }
      events {
        username
        eventName
      }
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_TAGS = gql`
  query Tags {
    tags {
      tagName
    }
  }
`;
