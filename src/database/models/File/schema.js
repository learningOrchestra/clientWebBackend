import mongoose from '../../../config/mongoose.config';

const {Schema} = mongoose;

const FileSchema = new Schema({
  name: {type: String, require: true},
  type: {type: String, require: true},
  data: {type: Object, require: true},
  projectId: {type: Object, require: true},
  createdBy: {type: String, require: true},
  createdAt: {type: Date, default: Date.now},
});

export default FileSchema;
