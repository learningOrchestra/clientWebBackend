import StatusCodes from 'http-status-codes';
import { sign } from 'jsonwebtoken';

import firebase from '../../../config/firebase';
import { cors } from '../../../lib/initMiddleware';
import { handleCreateUser } from '../../../database/controllers/User';

export default async (req, res) => {
  await cors(req, res);
  const { name, email, password } = req.body;

  try {
    const { user } = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: name });

    const userData = {
      id: user.uid,
      name: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    };
    const config = {
      subject: user.uid,
      expiresIn: '1d',
    };

    await handleCreateUser(user.uid);

    const token = sign(userData, process.env.JWT_SECRET, config);
    res.statusCode = StatusCodes.OK;
    res.end(JSON.stringify({ token }));
  } catch (error) {
    res.statusCode = StatusCodes.UNAUTHORIZED;
    res.end(JSON.stringify({ error }));
  }
};
