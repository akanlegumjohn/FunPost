//AsyncHandler is used to handle all promises returned
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/userModule');

//@desc     Register new user
//@route    /api/users
//@access   public
//@method   POST
const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: 'Please fill all fields' });
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
  if (!user) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }
  res.status(200).json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    token: generateToken(user._id),
  });
});

//@desc     Log user in
//@route    /api/users/login
//@access   public
//method    POST
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please add email and password' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ msg: 'Email does not exist, please create an account' });
  }
  //Takes in the password user entered and compare it with the old password
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ msg: 'Incorrect Password' });
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.status(200).json({
      msg: 'You logged in successfully',
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._id,
      email: user.email,
      token: generateToken(user._id),
      createdAt: user.createdAt,
    });
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate a token in order to authorize users whenever they log in
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { getMe, register, login };
