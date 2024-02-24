import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express' {
    export interface Request {
      userId?: string;
    }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the request headers
    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1]; // it is "Bearer ${token}" we only need token

    console.log(token)

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
      console.log('JWT_SECRET:', process.env.JWT_SECRET);

        const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET || '');

        // Add userId to the request for further processing
        req.userId = decodedToken.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Token is invalid or expired
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export default authMiddleware;
