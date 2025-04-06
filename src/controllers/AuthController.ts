import { Request, Response, NextFunction } from 'express';
import AuthService from '@services/AuthService';
import ApiResponseHandler from '@utils/ApiResponseHandler';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password)
      return ApiResponseHandler.success(res, token, 200)
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthController()