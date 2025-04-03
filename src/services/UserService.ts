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

  async findUserById(_id: string): Promise<IUser | null> {
    return await UserRepository.findUserById(_id);
  }

  async updateUserById(_id: string, data: Partial<IUser>): Promise<void> {
    const user = await UserRepository.findUserById(_id);
    if (!user) {
      throw new AppError('Usuário não encontrado!', 404);
    }

    await UserRepository.updateUserById(_id, data);
  }

  async deleteUserById(_id: string): Promise<void> {
    const user = await UserRepository.findUserById(_id);
    if (!user) {
      throw new AppError('Usuário não encontrado!', 404);
    }

    await UserRepository.deleteUserById(_id);
  }

  async listUsers(): Promise<IUser[]> {
    return await UserRepository.listUsers();
  }

}

export default new UserService();
