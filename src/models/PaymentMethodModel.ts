import mongoose, { Schema, Document } from "mongoose";

export enum PaymentMethod {
  DEBITCARD = "DEBITCARD",
  CREDITCARD = "CREDITCARD",
  PIX = "PIX",
  CASH = "CASH",
  INVOICE = "INVOICE"
}

export interface Card extends Document {
  cardLastFour: string;
  cardBrand: string;
  expirationDate: string;
  cardName: string;
}

const CardSchema = new Schema<Card>(
  {
    cardLastFour: { type: String, required: true },
    cardBrand: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cardName: { type: String, required: true }
  }, 
  { timestamps: true, versionKey: false }
)

export interface IPaymentMethod extends Document {
  companyId: mongoose.Schema.Types.ObjectId;
  paymentDeadLine: Date;
  paymentMethod: PaymentMethod;
  cards: Card[];
}

const PaymentMethodSchema = new Schema<IPaymentMethod>(
  {
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
    paymentDeadLine: { type: Date, required: true },
    paymentMethod: {
      type: String,
      enum: Object.values(PaymentMethod),
      default: PaymentMethod.CREDITCARD
    },
    cards: { type: [CardSchema], default: [] }
  },
  { timestamps: true, versionKey: false }

)

export default mongoose.model<IPaymentMethod>("PaymentMethod", PaymentMethodSchema);
