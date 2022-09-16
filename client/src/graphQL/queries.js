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
// export const GET_PROFILEDATA = gql`
//   query Query($userId: ID!) {
//     user(userId: $userId) {
//       _id
//       firstName
//       lastName
//       username
//       address
//       createdAt
//       profileAvatar
//       aboutMe
//       websiteUrl
//       number
//       email
//       bookmarks {
//         eventName
//         _id
//         date
//         price
//         location {
//           _id
//           cityName
//           state
//           postcode
//           streetName
//         }
//         images {
//           _id
//           imageLink
//         }
//         tags {
//           _id
//           tagName
//         }
//         reviews {
//           _id
//           rating
//         }
//       }
//       reviews {
//         _id
//         title
//         reviewText
//         rating
//       }
//       events {
//         username
//         eventName
//       }
//     }
//   }
// `;

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
      bookmarks {
        eventName
        price
        date
        images {
          imageLink
        }
        reviews {
          title
        }
      }
      reviews {
        username
        title
        reviewText
        rating
      }
      events {
        eventName
        location {
          streetName
        }
        price
        date
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
  query Tag {
    tags {
      _id
      tagName
    }
  }
`;
