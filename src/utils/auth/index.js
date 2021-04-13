import firebase from '../../config/firebase.config';
import {verify, sign} from 'jsonwebtoken';

export const handleGetAuthorization = async (data) => {
  const {token} = data;
  const auth = verify(token, process.env.JWT_SECRET);
  return auth;
};

export const handleSignIn = async (data) => {
  const {email, password} = data;
  const {user} = await firebase.auth()
      .signInWithEmailAndPassword(email, password);

  const userData = {
    _id: user.uid,
    name: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
  };
  const config = {
    subject: user.uid,
    expiresIn: '1d',
  };

  const token = sign(userData, process.env.JWT_SECRET, config);
  return token;
};

export const handleSignUp = async (data) => {
  const {name, email, password} = data;
  const {user} = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
  await user.updateProfile({displayName: name});

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
  return token;
};
