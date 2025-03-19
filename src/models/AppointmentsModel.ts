import mongoose, { Schema, Document } from "mongoose";

export interface IAppointments extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  professionalId: mongoose.Schema.Types.ObjectId;
  appointmentDate: Date;
  startTime: Date;
  endTime: Date;
  status: string;
}

const AppointmentsSchema = new Schema<IAppointments>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    appointmentDate: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ["OPEN", "CONFIRMED", "COMPLETED", "SCHEDULED", "CANCELED"],
      default: "OPEN"
    }
  },
);

export default mongoose.model<IAppointments>("Appointments", AppointmentsSchema);