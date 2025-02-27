import { Request, Response, NextFunction } from 'express';
import ApiResponseHandler from '@utils/ApiResponseHandler';

export function errorMiddleware(err: any, req: Request, res: Response, _next: NextFunction): void {
  const status = err.statusCode || 500;
  const message = err.message || 'Ocorreu um erro no servidor';
  const errorDetails = err.error || null;

  const errorResponse = {
    status,
    message,
    errorDetails,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  };

  console.error(errorResponse);

  ApiResponseHandler.error(res, message, status, errorDetails);
}

export default errorMiddleware;
