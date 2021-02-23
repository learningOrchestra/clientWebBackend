import mongoose from '../../../config/mongoose';

import FileSchema from '../File/schema';

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  createdBy: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProjectSchema.add({
  data: {
    projects: [ProjectSchema],
    files: [FileSchema],
  },
});

export default ProjectSchema;
