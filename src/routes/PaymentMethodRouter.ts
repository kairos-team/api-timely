import PaymentMethodController from "@controllers/PaymentMethodController";
import { Router } from "express";

const router = Router();

router.post('/', PaymentMethodController.createPaymentMethod)
router.get('/:id', PaymentMethodController.findPaymentMethodById)
router.delete('/:id', PaymentMethodController.deletePaymentMethodById)
router.put('/:id', PaymentMethodController.updatePaymentMethodById)


export default router