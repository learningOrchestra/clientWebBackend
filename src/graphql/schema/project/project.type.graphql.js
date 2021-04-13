import {gql} from 'graphql-modules';

export const Project = gql`
  extend type Query {
    getOwnProjects(
      createdBy: ID!,
      token: String!
    ): [Project]
    getProject(
      _id: ID!
      token: String!
    ): Project
  }

  extend type Mutation {
    createProject(
      name: String!
      color: String!
      createdBy: ID!
      token: String!
    ): Project
    updateProject(
      _id: ID!
      name: String
      color: String
      projects: [ProjectInput]
      shared: [UserSharedInput]
      token: String!
    ): Project
    deleteProject(
      _id: ID!
      token: String!
    ): String
  }

  type UserShared {
    _id: ID!
    access: String!
  }

  input UserSharedInput {
    _id: ID!
    access: String!
  }

  type Project {
    _id: ID
    name: String!
    color: String!
    projects: [Project]
    shared: [UserShared]
    createdBy: ID!
    createdAt: Date
  }

  input ProjectInput {
    name: String
    color: String
    projects: [ProjectInput]
    shared: [UserSharedInput]
  }
`;
