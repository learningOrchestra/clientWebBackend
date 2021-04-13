import mongoose from '../../../config/mongoose.config';

const {Schema} = mongoose;

const ProjectSchema = new Schema({
  name: {type: String, require: true},
  color: {type: String, require: true},
  shared: [{
    _id: {type: String},
    access: {type: String},
  }],
  createdBy: {type: String, require: true},
  createdAt: {type: Date, default: Date.now},
});

ProjectSchema.add({
  projects: [ProjectSchema],
});

export default ProjectSchema;
