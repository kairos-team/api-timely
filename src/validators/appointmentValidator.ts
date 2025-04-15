import { IAppointments } from '@models/AppointmentsModel';
import BaseValidator from './BaseValidator';
import { z } from 'zod';

class AppointmentValidator extends BaseValidator<IAppointments>{
    getRules() {
        return{
            appointmentProcedure: z.string().optional(),
            appointmentDate: z.coerce.date({ required_error: 'A data do agendamento deve ser fornecida.', invalid_type_error: 'Data de agendamento invalida.'}),
            startTime: z.coerce.date({ required_error: 'O horário de início é obrigatório',invalid_type_error: 'Horário de início inválido'}),
            endTime: z.coerce.date({ required_error: 'O horário de término é obrigatório',invalid_type_error: 'Horário de término inválido',}) 
        }
    }
}

export default new AppointmentValidator();