import {handleMiddlewareAuth} from '../../../utils/functions';

export const ProjectMiddleware = {
  Query: {
    '*': [handleMiddlewareAuth],
  },
  Mutation: {
    '*': [handleMiddlewareAuth],
  },
};
