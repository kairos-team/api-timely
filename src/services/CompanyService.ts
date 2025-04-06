import AppError from "@utils/AppError";
import { ICompany } from "@models/CompanyModel";
import CompanyRepository from "@repositories/CompanyRepository";
import UserRepository from "@repositories/UserRepository";
import { ErrorCodes } from "enum/ErrorCodes";

class CompanyService {
  async createCompany(data: ICompany): Promise<ICompany> {
    const user = await UserRepository.findUserById(String(data.ownerId))
    if (!user) {
      throw new AppError('Usuário não encontrado!', ErrorCodes.NOT_FOUND);
    }

    const newCompany = await CompanyRepository.createCompany(data)
    return newCompany;
  }

  async findCompanyById(_id: string): Promise<ICompany | null> {
    return await CompanyRepository.findCompanyById(_id);
  }

  async updateCompanyById(_id: string, data: Partial<ICompany>): Promise<void> {
    const company = await CompanyRepository.findCompanyById(_id)
    if (!company) {
      throw new AppError('Empresa não encontrada!', ErrorCodes.NOT_FOUND);
    }

    await CompanyRepository.updateCompanyById(_id, data);
  }

  async deleteCompanyById(_id: string): Promise<void> {
    const company = await CompanyRepository.findCompanyById(_id)
    if (!company) {
      throw new AppError('Empresa não encontrada!', ErrorCodes.NOT_FOUND);
    }

    await CompanyRepository.deleteCompanyById(_id);
  }

  async listCompanies(): Promise<ICompany[]> {
    return await CompanyRepository.listCompanies();
  }
}

export default new CompanyService();