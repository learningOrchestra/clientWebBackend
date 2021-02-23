import User from '../../models/User';

export const handleCreateUser = async (uid) => {
  const data = { uid };
  const user = await User.create(data);
  return user;
};

export const handleGetUser = async (uid) => {
  const data = await User.findOne({ uid });
  return data;
};
