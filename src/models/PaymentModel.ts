import mongoose, {Schema, Document} from "mongoose";

export enum PaymentStatus{
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED  = "FAILED",
}
 
export interface IPayment extends Document{
    companyId: mongoose.Types.ObjectId;
    colaborators: mongoose.Types.ObjectId[];
    amount: number;
    date: Date;
    status: PaymentStatus;
}


const PaymentSchema = new Schema<IPayment>(
    {
        companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
        colaborators: [{type: mongoose.Schema.Types.ObjectId, ref: "User", require: true}],
        amount: {type: Number, required: true},
        date: { type: Date, required: true},
        status: { type: String, enum: Object.values(PaymentStatus), default: PaymentStatus.PENDING,},         
    },
    {timestamps: true, versionKey: false}
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);