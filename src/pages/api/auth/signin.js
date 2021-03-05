import StatusCodes from 'http-status-codes';
import { sign } from 'jsonwebtoken';

import firebase from '../../../config/firebase';
import { cors } from '../../../lib/initMiddleware';

export default async (req, res) => {
  await cors(req, res);
  const { email, password } = req.body;

  try {
    const { user } = await firebase.auth()
      .signInWithEmailAndPassword(email, password);

    console.log(user.uid);

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

    const token = sign(userData, process.env.JWT_SECRET, config);
    res.statusCode = StatusCodes.OK;
    res.end(JSON.stringify({ token }));
  } catch (error) {
    res.statusCode = StatusCodes.UNAUTHORIZED;
    res.end(JSON.stringify({ error }));
  }
};
