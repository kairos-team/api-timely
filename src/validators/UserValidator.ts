import { IUser } from '@models/UserModel';
import BaseValidator from '@validators/BaseValidator';
import { z } from 'zod';

class UserValidator extends BaseValidator<IUser> {
  getRules() {
    return {
      name: z.string().min(2, { message: 'O nome deve ter pelo menos 3 caracteres' }),
      email: z.string().email({ message: 'Email inválido' }),
      phone: z.string().optional(),
      password: z.string().optional(),
      mustChangePassword: z.boolean().optional(),
      companyId: z.string().optional(),
    };
  }
}

export default new UserValidator();