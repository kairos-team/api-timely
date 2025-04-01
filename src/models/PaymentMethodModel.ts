import mongoose, { Schema, Document } from "mongoose";

export enum PaymentMethod {
  DEBITCARD = "DEBITCARD",
  CREDITCARD = "CREDITCARD",
  PIX = "PIX",
  CASH = "CASH",
  INVOICE = "INVOICE"
}

export interface IPaymentMethod extends Document {
  companyId: mongoose.Schema.Types.ObjectId;
  amount: number;
  date: Date;
  paymentMethod: PaymentMethod;
}

const PaymentMethodSchema = new Schema<IPaymentMethod>(
  {
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
    amount: { type: Number, ref: "Payment", required: true },
    date: { type: Date, required: true },
    paymentMethod: {
      type: String,
      enum: Object.values(PaymentMethod),
      default: PaymentMethod.PIX
    }
  },
  { timestamps: true, versionKey: false }

)

export default mongoose.model<IPaymentMethod>("PaymentMethod", PaymentMethodSchema);
