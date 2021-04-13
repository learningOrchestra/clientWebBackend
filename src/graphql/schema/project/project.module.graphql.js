import {createModule} from 'graphql-modules';

import {Project} from './project.type.graphql';
import {ProjectResolvers} from './project.resolvers.graphql';
import {ProjectMiddleware} from './project.middleware.graphql';

export const ProjectModule = createModule({
  id: 'project-module',
  dirname: __dirname,
  typeDefs: [Project],
  resolvers: [ProjectResolvers],
  middlewares: ProjectMiddleware,
});
