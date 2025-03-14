import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  phone?: string;
  password?: string;
  mustChangePassword: boolean;
  company?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    mustChangePassword: { type: Boolean, default: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", default: null },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model<IUser>("User", UserSchema);
