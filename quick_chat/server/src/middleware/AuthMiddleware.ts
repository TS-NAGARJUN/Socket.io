import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include `user`


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ status: 403, message: "Forbidden" });
    }

    req.user = user as AuthUser;
    next(); // ✅ call next when the user is authenticated
  });
};

export default authMiddleware;
