const User = require('../models/user');

// Check if a user with the given email already exists
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Create a new user
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

module.exports = {
  findUserByEmail,
  createUser,
};
