import mongoose from '../../../config/mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  uid: {
    type: String,
    require: true,
  },
  projects: [{
    id: {
      type: String,
      require: true,
    },
    access: {
      type: String,
      require: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default UserSchema;
