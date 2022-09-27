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
        address
        createdAt
        profileAvatar
        aboutMe
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
      firstName
      lastName
      username
      address
      createdAt
      profileAvatar
      aboutMe
      websiteUrl
      number
      email
      myEvents {
        _id
        createdById {
          _id
        }
        eventName
        price
        date
        images {
          imageLink
        }
        reviews {
          title
          rating
        }
      }
      bookmarks {
        _id
        createdById {
          _id
        }
        eventName
        price
        date
        images {
          imageLink
        }
        reviews {
          title
          rating
        }
      }
      reviews {
        _id
        postedBy
        username
        title
        reviewText
        rating
      }
      events {
        _id
        createdById {
          _id
        }
        eventName
        price
        date
        images {
          imageLink
        }
        reviews {
          title
          rating
        }
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

export const QUERY_EVENTBYID = gql`
  query Query($eventId: ID!) {
    event(eventId: $eventId) {
      eventName
      location {
        streetName
        cityName
        postcode
      }
      description
      date
      price
      ageGroup
      createdById {
        username
        myEvents {
          _id
        }
        websiteUrl
        profileAvatar
      }
      images {
        imageLink
      }
      reviews {
        _id
        postedBy
        username
        title
        reviewText
        rating
      }
      attendees
      tags {
        tagName
        events {
          eventName
          price
          date
          images {
            imageLink
          }
          _id
          reviews {
            _id
          }
        }
      }
    }
  }
`;

export const QUERY_TAGS = gql`
  query Tags {
    tags {
      _id
      tagName
    }
  }
`;

export const QUERY_USER_BOOKMARKS = gql`
  query Query($userId: ID!) {
    user(userId: $userId) {
      _id
      bookmarks {
        _id
        eventName
        price
        images {
          imageLink
        }
        location {
          streetName
          cityName
          postcode
        }
      }
    }
  }
`;

export const QUERY_USER_AVATAR = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      _id
      profileAvatar
    }
  }
`;

export const CHECK_USERNAME = gql`
  query Query($username: String) {
    user(username: $username) {
      username
    }
  }
`;
