const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Register user' });
});

const login = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Log a user ' });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Welcome ${req.params.me}` });
});

module.exports = { getMe, register, login };
