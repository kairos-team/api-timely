import CompanyRepository from "@repositories/CompanyRepository";
import PaymentRepository from "@repositories/PaymentRepository";
import AppError from "@utils/AppError";


class PaymentService {
    async createPayment(data: IPayment): Promise<IPayment> {
        const company = await CompanyRepository.findCompanyById(String(data.companyid))
        if (!company) {
            throw new AppError('Empresa não encontrado!', 404);
        }

        const newPayment = await PaymentRepository.createPayment(data)
        return newPayment;
    }

    async findPaymentById(_id: string): Promise<IPayment | null> {
        return await PaymentRepository.findPaymentById(_id)
    }

    async updatePaymentById(_id: string, data: Partial<IPayment>): Promise<void> {
        const company = await CompanyRepository.findCompanyById(_id)
        if (!company) {
            throw new AppError('Empresa não encontrada!', 404);
        }
        await PaymentRepository.updatePaymentById(_id, data);
    }

    async deletePaymentById(_id: string): Promise<void> {
        const company = await CompanyRepository.findCompanyById(_id)
        if (!company) {
            throw new AppError('Empresa não encontrada!', 404);
        }

        await PaymentRepository.deletePaymentById(_id);
    }

    async listPayments(): Promise<IPayment[]> {
        return await PaymentRepository.listPayments();
    }
}

export default new PaymentService();