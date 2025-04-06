import AppError from '@utils/AppError';
import { z, ZodObject, ZodRawShape } from 'zod';

abstract class BaseValidator<T> {
  abstract getRules(): ZodRawShape;

  validator(data: T, next: Function) {
    try {
      const schema: ZodObject<ZodRawShape> = z.object(this.getRules());
      schema.parse(data);

      next();
    } catch (error: any) {

      throw new AppError('Campos inválidos!!', 422, error.errors);
    }
  }
}

export default BaseValidator;