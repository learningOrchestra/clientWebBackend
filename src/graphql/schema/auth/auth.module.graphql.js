import {createModule} from 'graphql-modules';

import {Auth} from './auth.type.graphql';
import {AuthResolvers} from './auth.resolvers.graphql';

export const AuthModule = createModule({
  id: 'auth-module',
  dirname: __dirname,
  typeDefs: [Auth],
  resolvers: [AuthResolvers],
});
