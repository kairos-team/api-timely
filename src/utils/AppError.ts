import { ErrorCodes } from "enum/ErrorCodes";

class AppError extends Error {
  public statusCode: number;
  public validationErrors?: string[];

  constructor(message: string, statusCode: number, validationErrors?: string[]) {
    super(message);
    this.statusCode = statusCode;
    this.validationErrors = validationErrors;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
