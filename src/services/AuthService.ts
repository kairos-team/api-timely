import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import AppError from '../utils/AppError';
import UserRepository from '../repositories/UserRepository';


class AuthService {
  async login(email: string, password: string){
    const user = await UserRepository.findByEmail(email);
    if(!user){
      throw new AppError('Usuário não encontrado!', 404);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password as string);
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