import mongoose from '../../../config/mongoose';

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  paths: [{
    _id: {
      type: String,
      require: true,
    },
    index: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  }],
  projects: [{ type: String }],
  files: [{ type: String }],
  shared: [{
    id: { type: String },
    access: { type: String },
  }],
  createdBy: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default ProjectSchema;
