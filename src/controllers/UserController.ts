import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import ApiResponseHandler from '@utils/ApiResponseHandler';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await UserService.createUser(req.body);
      return ApiResponseHandler.success(res, newUser, 201)
    } catch (error) {
      next(error)
    }
  }

  async getUserEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.params;
      const user = await UserService.getUserEmail(email);
      return ApiResponseHandler.success(res, user)
    } catch (error) {
      next(error);
    }
  }

  async findUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserService.findUserById(id);
      return ApiResponseHandler.success(res, user);
    } catch (error) {
      next(error);
    }
  }

  async updateUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserService.updateUserById(id, req.body);
      return ApiResponseHandler.success(res, user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserService.deleteUserById(id);
      return ApiResponseHandler.success(res, user);
    } catch (error) {
      next(error);
    }
  }

  async listUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.listUsers();
      return ApiResponseHandler.success(res, users);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
