import bcrypt from 'bcryptjs'
import AppError from '../utils/AppError';
import { IUser } from '../models/UserModel';
import UserRepository from '../repositories/UserRepository';

class UserService {
  async getUserEmail(email: string): Promise<IUser> {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Usuário não encontrado!', 404);
    }
    return user;
  }

  async createUser(payload: IUser): Promise<IUser> {
    const user = await UserRepository.findByEmail(payload.email);
    if (user) {
      throw new AppError(`Um usuário com esse email: ${payload.email} já existe!`, 409);
    }

    let hashedPassword = undefined;
    if (payload.password) {
      hashedPassword = await bcrypt.hash(payload.password, 10);
    }

    const newUser = await UserRepository.createUser({
      ...payload,
      password: hashedPassword,
    });

    return newUser;
  }

}

export default new UserService();
