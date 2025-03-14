import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import ApiResponseHandler from '@utils/ApiResponseHandler';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await UserService.createUser(req.body);
      ApiResponseHandler.success(res, newUser, 201)
    } catch (error) {
      next(error)
    }
  }

  async getUserEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.params;
      const user = await UserService.getUserEmail(email);
      ApiResponseHandler.success(res, user)
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
