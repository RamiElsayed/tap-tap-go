import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $number: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      number: $number
      email: $email
      password: $password
    ) {
      token
      user {
        username
      }
    }
  }
`;
