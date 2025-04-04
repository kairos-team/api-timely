import { Router } from "express";
import AppointmentController from "@controllers/AppointmentController";
import authMiddleware from "middlewares/authMiddleware";

const router = Router();

router.post('/', AppointmentController.createAppointment)
router.get('/:id', authMiddleware, AppointmentController.findAppointmentById)
router.get('/', AppointmentController.listAppointments)
router.put('/:id', authMiddleware, AppointmentController.updateAppointmentById)
router.delete('/:id', authMiddleware, AppointmentController.deleteAppointmentById)

export default router;