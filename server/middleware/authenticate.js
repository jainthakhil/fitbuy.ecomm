import jwt from 'jsonwebtoken';
import { User } from '../model/userSchema';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No authentication token, authorization denied' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret
    req.userId = verified.id; // Attach the user's ID to the request object
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token verification failed, authorization denied' });
  }
};

module.exports = authMiddleware;
