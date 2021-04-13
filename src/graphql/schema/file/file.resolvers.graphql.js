import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import {
  handleGetFiles, handleGetFile,
  handleCreateWorkflow, handleCreateDataset,
  handleUpdateFile, handleUpdateWorkflow,
  handleDeleteWorkflow, handleDeleteDataset
} from '../../../database/controllers/File';

export const FileResolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    getFiles: async (root, args, context, info) => {
      const files = await handleGetFiles(args);
      return files;
    },
    getFile: async (root, args, context, info) => {
      const file = await handleGetFile(args);
      return file;
    },
  },
  Mutation: {
    createFile: async (root, args, context, info) => {
      const handleCreate = {
        wf: async () => await handleCreateWorkflow(args),
        db: async () => await handleCreateDataset(args)
      }
      return await handleCreate[args?.type]()
    },
    updateFile: async (root, args, context, info) => {
      const file = await handleUpdateFile(args);
      return file;
    },
    updateWorkflow: async (root, args, context, info) => {
      const file = await handleUpdateWorkflow(args);
      return file;
    },
    deleteFile: async (root, args, context, info) => {
      const handleDelete = {
        wf: async () => await handleDeleteWorkflow(args),
        db: async () => await handleDeleteDataset(args)
      }
      return await handleDelete[args?.type]()
    },
  },
};
