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
