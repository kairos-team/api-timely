import { IPaymentMethod } from "@models/PaymentMethodModel";
import CompanyRepository from "@repositories/CompanyRepository";
import PaymentMethodRepository from "@repositories/PaymentMethodRepository";
import AppError from "@utils/AppError";


class PaymentMethodService {
    async createPaymentMethod(data: IPaymentMethod): Promise<IPaymentMethod> {
        const company = await CompanyRepository.findCompanyById(String(data.companyId))
        if (!company) {
            throw new AppError('Empresa não encontrada', 404)
        }
        const newPaymentMethod = await PaymentMethodRepository.createPaymentMethod(data)
        return newPaymentMethod
    }

    async findPaymentMethodById(_id: string): Promise<IPaymentMethod | null> {
        return await PaymentMethodRepository.findPaymentMethodById(_id)
    }

    async updatePaymentMethodById(_id: string, data: Partial<IPaymentMethod>): Promise<void> {
        const company = await CompanyRepository.findCompanyById(String(data.companyId))
        if (!company) {
            throw new AppError('Empresa não encontrada!', 404);
        }
        await PaymentMethodRepository.updatePaymentMethodById(_id, data);
    }

    async deletePaymentMethodById(_id: string): Promise<void> {
        const company = await CompanyRepository.findCompanyById(_id)
        if (!company) {
            throw new AppError('Empresa não encontrada!', 404);
        }

        await PaymentMethodRepository.deletePaymentMethodById(_id);
    }
}


export default new PaymentMethodService();