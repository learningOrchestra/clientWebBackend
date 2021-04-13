import {gql} from 'graphql-modules';

export const File = gql`
  scalar Date
  scalar JSON
  scalar JSONObject

  extend type Query {
    getFiles(
      projectId: ID!
      token: String!
      apiURL: String!
    ): [File]
    getFile(
      _id: ID!
      token: String!
    ): File
  }

  extend type Mutation {
    createFile(
      name: String!
      type: String!
      data: DataFileInput
      createdBy: ID!
      projectId: ID!
      token: String!
      apiURL: String!
    ): File
    updateFile(
      _id: ID!
      name: String!
      token: String!
    ): File
    updateWorkflow(
      _id: ID!
      data: DataFileInput!
      token: String!
    ): File
    deleteFile(
      _id: ID!
      type: String!
      token: String!
      apiURL: String!
    ): String
  }
  
  type Position {
    x: Int
    y: Int
  }

  type DataFile {
    url: String
    finished: String
    dataset: [JSONObject]
    graph: [JSONObject]
  }

  input DataFileInput {
    url: String
    graph: [JSONObject]
  }

  type File {
    _id: ID!
    name: String!
    type: String!
    data: DataFile
    projectId: ID!
    createdBy: ID!
    createdAt: Date
  }
`;
