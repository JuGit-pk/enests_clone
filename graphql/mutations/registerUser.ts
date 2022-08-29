import { gql } from '@apollo/client'

const REGISTER_USER = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      user {
        id
        username
        email
      }
    }
  }
`

export default REGISTER_USER
