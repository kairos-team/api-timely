import { Request, Response, NextFunction } from "express";
import AppointmentService from "@services/AppointmentService";
import ApiResponseHandler from "@utils/ApiResponseHandler";

class AppointmentController {
  async createAppointment(req: Request, res: Response, next: NextFunction) {
    try {
      const newAppointment = await AppointmentService.createAppointment(req.body);
      return ApiResponseHandler.success(res, newAppointment, 201);
    } catch (error) {
      next(error);
    }
  }

  async findAppointmentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const appointment = await AppointmentService.findAppointmentById(id);
      return ApiResponseHandler.success(res, appointment);
    } catch (error) {
      next(error);
    }
  }

  async updateAppointmentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const appointment = await AppointmentService.updateAppointmentById(id, req.body);
      return ApiResponseHandler.success(res, appointment);
    } catch (error) {
      next(error);
    }
  }

  async deleteAppointmentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const appointment = await AppointmentService.deleteAppointmentById(id);
      return ApiResponseHandler.success(res, appointment);
    } catch (error) {
      next(error);
    }
  }

  async listAppointments(req: Request, res: Response, next: NextFunction) {
    try {
      const appointment = await AppointmentService.listAppointments();
      return ApiResponseHandler.success(res, appointment);
    } catch (error) {
      next(error);
    }
  }

}

export default new AppointmentController();