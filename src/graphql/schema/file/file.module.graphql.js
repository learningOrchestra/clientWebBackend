import {createModule} from 'graphql-modules';

import {File} from './file.type.graphql';
import {FileResolvers} from './file.resolvers.graphql';
import {FileMiddleware} from './file.middleware.graphql';

export const FileModule = createModule({
  id: 'file-module',
  dirname: __dirname,
  typeDefs: [File],
  resolvers: [FileResolvers],
  middlewares: FileMiddleware,
});
