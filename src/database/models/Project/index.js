import mongoose from '../../../config/mongoose';

import ProjectSchema from './schema';

let Project;
try {
  Project = mongoose.model('Project');
} catch (error) {
  Project = mongoose.model('Project', ProjectSchema);
}

export default Project;
