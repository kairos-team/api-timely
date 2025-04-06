import AppError from "@utils/AppError";
import { IAppointments } from "@models/AppointmentsModel";
import AppointmentRepository from "@repositories/AppointmentRepository";
import UserRepository from "@repositories/UserRepository";
import { ErrorCodes } from "enum/ErrorCodes";


class AppointmentsService {
    async createAppointment(data: IAppointments): Promise<IAppointments | void> {
        const user = await UserRepository.findUserById(String(data.userId && data.professionalId))
        if (!user) {
            throw new AppError('Agendamento não encontrado!', ErrorCodes.NOT_FOUND);
        }
        const newAppointment = await AppointmentRepository.createAppointment(data)
        return newAppointment;
    }
    async findAppointmentById(_id: string): Promise<IAppointments | null> {
        return await AppointmentRepository.findAppointmentById(_id);
    }

    async updateAppointmentById(_id: string, data: Partial<IAppointments>) {
        const appointment = await AppointmentRepository.findAppointmentById(_id)
        if (!appointment) {
            throw new AppError('Agendamento não encontrado!', ErrorCodes.NOT_FOUND);
        }
        await AppointmentRepository.updateAppointmentById(_id, data);
    }
    async deleteAppointmentById(_id: string): Promise<void> {
        const appointment = await AppointmentRepository.findAppointmentById(_id)
        if (!appointment) {
            throw new AppError('Agendamento não encontrado!', ErrorCodes.NOT_FOUND);
        }
        await AppointmentRepository.deleteAppointmentById(_id);
    }

    async listAppointments(): Promise<IAppointments[]> {
        return await AppointmentRepository.listAppointments();
    }
}

export default new AppointmentsService();