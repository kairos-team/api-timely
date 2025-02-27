import UserRepository from '../repositories/UserRepository';
import { IUser } from '../models/UserModel';
import AppError from '../utils/AppError';

class UserService {
  async getUserEmail(email: string): Promise<IUser> {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new AppError('User Not Found', 404);
    }
    return user;
  }

  async createUser(name: string, email: string, password: string): Promise<IUser> {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new AppError(`A user with the email ${email} already exists`, 409);
    }

    return await UserRepository.createUser({ name, email, password });
  }

}

export default new UserService();
