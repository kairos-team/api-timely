import { Request, Response, NextFunction } from 'express';
import ApiResponseHandler from '@utils/ApiResponseHandler';
import { ErrorCodes } from 'enum/ErrorCodes';

export function errorMiddleware(err: any, req: Request, res: Response, _next: NextFunction): void {
  const status = err.statusCode || ErrorCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Ocorreu um erro no servidor';
  const errorDetails = err.error || err.validationErrors || null;

  const errorResponse = {
    status,
    message,
    errorDetails,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  };

  console.error(errorResponse);

  return ApiResponseHandler.error(res, message, status, errorDetails);
}

export default errorMiddleware;
