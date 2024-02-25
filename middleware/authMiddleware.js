const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware for user authentication
exports.authenticateUser = async (req, res, next) => {
  // Check for token in headers
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization Denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid Token' });
  }
};
