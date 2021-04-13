import {handleMiddlewareAuth} from '../../../utils/functions';

export const FileMiddleware = {
  Query: {
    '*': [handleMiddlewareAuth],
  },
  Mutation: {
    '*': [handleMiddlewareAuth],
  },
};
