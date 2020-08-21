import User from '../models/user';
export const createUser = (user) => {
  return new User({ ...user }).save();
};

export const userExists = (filter) => {
  return User.findOne(filter);
};
