import mongoose from '../../../config/mongoose';

import FileSchema from './schema';

let File;
try {
  File = mongoose.model('File');
} catch (error) {
  File = mongoose.model('File', FileSchema);
}

export default File;
