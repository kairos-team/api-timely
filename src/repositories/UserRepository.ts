import UserModel, { IUser } from '../models/UserModel';

class UserRepository {
  async createUser(data: Partial<IUser>): Promise<IUser> {
    return await UserModel.create(data);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }
  
  async findById(_id: string): Promise<IUser | null> {
    return await UserModel.findById({ _id });
  }

  async listUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async deleteUserById(_id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete({ _id })
  }
}

export default new UserRepository();
