const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModule');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log('decode', decode);
      console.log('token', token);
      req.user = await User.findById(decode.id).select('-password');
      next();
    } catch (error) {
      res.status(401).send('You are not authorized');
    }
  }
  if (!token) {
    return res.status(401).send('No token you are not authorized');
  }
});

module.exports = { protect };
