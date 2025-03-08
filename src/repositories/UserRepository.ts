import UserModel, { IUser } from '../models/UserModel';

class UserRepository {
  async createUser(data: Partial<IUser>): Promise<IUser> {
    return await UserModel.create(data);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

}

export default new UserRepository();
