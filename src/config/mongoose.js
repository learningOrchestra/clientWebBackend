import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_CREDENCIAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
