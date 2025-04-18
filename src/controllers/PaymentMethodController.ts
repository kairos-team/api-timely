import { Request, Response, NextFunction } from "express";
import PaymentMethodService from "@services/PaymentMethodService";
import ApiResponseHandler from "@utils/ApiResponseHandler";

class PaymentMethodController {
    async createPaymentMethod(req: Request, res: Response, next: NextFunction) {
        try {
            const newPaymentMethod = await PaymentMethodService.createPaymentMethod(req.body);
            return ApiResponseHandler.success(res, newPaymentMethod, 201);
        } catch (error) {
            next(error);
        }
    }

    //metodo para identificar o tipo de pagamento?
    async findPaymentMethodById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const paymentMethod = await PaymentMethodService.findPaymentMethodById(id);
            return ApiResponseHandler.success(res, paymentMethod);
        } catch (error) {
            next(error);
        }
    }

    async updatePaymentMethodById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const payment = await PaymentMethodService.updatePaymentMethodById(id, req.body);
            return ApiResponseHandler.success(res, payment);
        } catch (error) {
            next(error);
        }
    }

    async deletePaymentMethodById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const payment = await PaymentMethodService.deletePaymentMethodById(id);
            return ApiResponseHandler.success(res, payment);
        } catch (error) {
            next(error);
        }
    }
}

export default new PaymentMethodController();
