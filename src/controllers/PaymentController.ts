import { NextFunction, Request, Response } from "express";
import PaymentService from "@services/PaymentService";
import ApiResponseHandler from "@utils/ApiResponseHandler";


class PaymentController {
  async createPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const newPayment = await PaymentService.createPayment(req.body);
      ApiResponseHandler.success(res, newPayment, 201);
    } catch (error) {
      next(error);
    }
  }

  async findPaymentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const payment = await PaymentService.findPaymentById(id);
      ApiResponseHandler.success(res, payment);
    } catch (error) {
      next(error);
    }
  }

  async updatePaymentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const payment = await PaymentService.updatePaymentById(id, req.body);
      ApiResponseHandler.success(res, payment);
    } catch (error) {
      next(error);
    }
  }

  async deletePaymentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const payment = await PaymentService.deletePaymentById(id);
      ApiResponseHandler.success(res, payment);
    } catch (error) {
      next(error);
    }
  }

  async listPayments(req: Request, res: Response, next: NextFunction) {
    try {
      const payments = await PaymentService.listPayments();
      ApiResponseHandler.success(res, payments);
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentController();