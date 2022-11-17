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

      //decode is the payload returned from jwt
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      //req.user represents the user that had just logged in and that can be used to access protected routes
      req.user = await User.findById(decode.id).select('-password');
      console.log(req.user);
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
