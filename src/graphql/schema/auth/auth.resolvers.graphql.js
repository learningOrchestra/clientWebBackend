import {
  handleGetAuthorization, handleSignIn, handleSignUp,
} from '../../../utils/auth';

export const AuthResolvers = {
  Query: {
    getAuthorization: async (root, args, context, info) => {
      const auth = await handleGetAuthorization(args);
      return auth;
    },
    signIn: async (root, args, context, info) => {
      const project = await handleSignIn(args);
      return project;
    },
  },
  Mutation: {
    signUp: async (root, args, context, info) => {
      const project = await handleSignUp(args);
      return project;
    },
  },
};

