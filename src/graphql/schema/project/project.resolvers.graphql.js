import {
  handleGetOwnProjects, handleGetProject,
  handleCreateProject, handleUpdateProject,
  handleDeleteProject,
} from '../../../database/controllers/Project';

export const ProjectResolvers = {
  Query: {
    getOwnProjects: async (root, args, context, info) => {
      const projects = await handleGetOwnProjects(args);
      return projects;
    },
    getProject: async (root, args, context, info) => {
      const project = await handleGetProject(args);
      return project;
    },
  },
  Mutation: {
    createProject: async (root, args, context, info) => {
      const project = await handleCreateProject(args);
      return project;
    },
    updateProject: async (root, args, context, info) => {
      const project = await handleUpdateProject(args);
      return project;
    },
    deleteProject: async (root, args, context, info) => {
      const response = await handleDeleteProject(args);
      return response;
    },
  },
};

