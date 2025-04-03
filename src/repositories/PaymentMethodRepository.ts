import PaymentMethodModel, { IPaymentMethod } from "@models/PaymentMethodModel";

class PaymentMethodRepository {
    async createPaymentMethod(data: IPaymentMethod): Promise<IPaymentMethod> {
        return await PaymentMethodModel.create(data)
    }
    async findPaymentMethodById(_id: string): Promise<IPaymentMethod | null> {
        return await PaymentMethodModel.findById({ _id })
    }
    async updatePaymentMethodById(_id: string, data: Partial<IPaymentMethod>): Promise<IPaymentMethod | null> {
        return await PaymentMethodModel.findByIdAndUpdate({ _id }, data, { new: true })
    }
    async deletePaymentMethodById(_id: string): Promise<IPaymentMethod | null> {
        return await PaymentMethodModel.findByIdAndDelete({ _id })
    }
}

export default new PaymentMethodRepository();