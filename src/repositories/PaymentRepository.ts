import PaymentModel, { IPayment } from "@models/PaymentModel";

class PaymentRepository {
  async createPayment(data: IPayment): Promise<IPayment> {
    return await PaymentModel.create(data);
  }

  async findPaymentById(_id: string): Promise<IPayment | null> {
    return await PaymentModel.findById({ _id });
  }

  async updatePaymentById(_id: string, data: Partial<IPayment>): Promise<IPayment | null> {
    return await PaymentModel.findByIdAndUpdate({ _id }, data, { new: true });
  }

  async deletePaymentById(_id: string): Promise<IPayment | null> {
    return await PaymentModel.findByIdAndDelete({ _id });
  }

  async listPayments(): Promise<IPayment[]> {
    return await PaymentModel.find();
  }

}

export default new PaymentRepository();