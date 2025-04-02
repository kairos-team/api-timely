import AppointmentsModel, { IAppointments } from "@models/AppointmentsModel";

class AppointmentRepository {
  async createAppointment(data: IAppointments): Promise<IAppointments> {
    return await AppointmentsModel.create(data);
  }

  async findAppointmentById(_id: string): Promise<IAppointments | null> {
    return await AppointmentsModel.findById({ _id });
  }

  async updateAppointmentById(_id: string, data: Partial<IAppointments>): Promise<IAppointments | null> {
    return await AppointmentsModel.findByIdAndUpdate({ _id }, data, { new: true });
  }

  async deleteCompanyById(_id: string): Promise<IAppointments | null> {
    return await AppointmentsModel.findByIdAndDelete({ _id });
  }

  async listAppointments(): Promise<IAppointments[]> {
    return await AppointmentsModel.find();
  }
}

export default new AppointmentRepository();