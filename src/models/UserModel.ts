import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  mustChangePassword: boolean;
  company?: mongoose.Types.ObjectId;
  
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    mustChangePassword: { type: Boolean, default: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", default: null },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model<IUser>("User", UserSchema);
