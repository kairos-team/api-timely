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

  async updateUserById(_id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate({ _id }, data, { new: true });
  }

  async deleteUserById(_id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete({ _id });
  }

  async listUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }

}

export default new UserRepository();
