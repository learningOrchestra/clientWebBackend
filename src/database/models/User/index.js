import mongoose from '../../../config/mongoose';

import UserSchema from './schema';

let User;
try {
  User = mongoose.model('User');
} catch (error) {
  User = mongoose.model('User', UserSchema);
}

export default User;
