import {gql} from 'graphql-modules';

export const Auth = gql`
  type Query {
    getAuthorization(token: String!): AuthUser
    signIn(
      email: String!
      password: String!
    ): String
  }

  type Mutation {
    signUp(
      name: String!
      email: String!
      password: String!
    ): String
  }

  type AuthUser {
    _id: ID!
    name: String
    photoURL: String
    email: String
    iat: Int
    exp: Int
    sub: String
  }
`;
