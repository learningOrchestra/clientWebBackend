import {createApplication} from 'graphql-modules';

import {FileModule} from './file/file.module.graphql';
import {ProjectModule} from './project/project.module.graphql';
import {AuthModule} from './auth/auth.module.graphql';

const application = createApplication({
  modules: [AuthModule, FileModule, ProjectModule],
});

export const schema = application.createSchemaForApollo();
