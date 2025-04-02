import AppError from "@utils/AppError";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

interface Decoded {
  id: string,
  name: string
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  const SECRET = process.env.JWT_SECRET as string

  if (!token) {
    throw new AppError('Token não fornecido', 401)
  }

  try {
    const decoded = jwt.verify(token, SECRET) as Decoded;
    req.user = decoded

    next();
  } catch (error) {
    throw new AppError('Token inválido ou expirado!', 403)
  }
}

export default authMiddleware;