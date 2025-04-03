import mongoose, { Schema, Document } from "mongoose";

export interface ICompany extends Document {
  name: string;
  ownerId: mongoose.Types.ObjectId;
  CNPJ: string;
}

const CompanySchema = new Schema<ICompany>(
  {
    name: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true  },
    CNPJ: { type: String, required: true },   
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model<ICompany>("Company", CompanySchema);