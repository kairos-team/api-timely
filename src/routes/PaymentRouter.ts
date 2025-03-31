import { Router } from "express";
import PaymentController from "@controllers/PaymentController";

const router = Router();

router.post('/', PaymentController.createPayment)
router.get('/:id', PaymentController.findPaymentById)
router.get('/', PaymentController.listPayments)
router.put('/:id', PaymentController.updatePaymentById)
router.delete('/:id', PaymentController.deletePaymentById)

export default router;