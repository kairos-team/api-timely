import { IPayment } from "@models/PaymentModel";
import CompanyRepository from "@repositories/CompanyRepository";
import PaymentRepository from "@repositories/PaymentRepository";
import AppError from "@utils/AppError";
import { ErrorCodes } from "enum/ErrorCodes";


class PaymentService {
  async createPayment(data: IPayment): Promise<IPayment> {
    const company = await CompanyRepository.findCompanyById(String(data.companyId))
    if (!company) {
      throw new AppError('Empresa não encontrada!', ErrorCodes.NOT_FOUND);
    }

    const newPayment = await PaymentRepository.createPayment(data)
    return newPayment;
  }

  async findPaymentById(_id: string): Promise<IPayment | null> {
    return await PaymentRepository.findPaymentById(_id)
  }

  async updatePaymentById(_id: string, data: Partial<IPayment>): Promise<void> {
    const payment = await PaymentRepository.findPaymentById(_id);
    if (!payment) {
      throw new AppError('Pagamento não encontrado!', ErrorCodes.NOT_FOUND);
    }
    await PaymentRepository.updatePaymentById(_id, data);
  }

  async deletePaymentById(_id: string): Promise<void> {
    const payment = await PaymentRepository.findPaymentById(_id);
    if (!payment) {
      throw new AppError('Pagamento não encontrado!', ErrorCodes.NOT_FOUND);
    }
    await PaymentRepository.deletePaymentById(_id);
  }

  async listPayments(): Promise<IPayment[]> {
    return await PaymentRepository.listPayments();
  }
}

export default new PaymentService();