import UserRepository from '../repositories/UserRepository';
import AppError from '../utils/AppError';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


class AuthService {
  async login(email: string, password: string){
    const user = await UserRepository.findByEmail(email);
    if(!user){
      throw new AppError('User Not Found', 404);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
      throw new AppError('Senha incorreta. Verifique e tente novamente.', 404);
    }

    const token = jwt.sign({
      id: user._id,
      name: user.name
    }, process.env.JWT_SECRET as string, {expiresIn: '180d'})

    return token;
  }

}

export default new AuthService();