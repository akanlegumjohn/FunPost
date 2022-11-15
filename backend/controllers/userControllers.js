const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/userModule');

//@desc     Register new user
//@route    /api/users
//@method   POST
const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: 'Please fill in all text' });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(200).json({ msg: 'Email already exist. Please log in' });
  }

  //Encrypt user password to ensure security
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  res.status(200).json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    token: generateToken(user._id),
  });
});

const login = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Log a user ' });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Welcome ${req.params.me}` });
});

// Generate a token in order to authorize users whenever they log in
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { getMe, register, login };
