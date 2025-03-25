import CompanyModel, { ICompany } from "@models/CompanyModel";

class CompanyRepository {
  async createCompany(data: ICompany): Promise<ICompany> {
    return await CompanyModel.create(data);
  }

  async findCompanyById(_id: string): Promise<ICompany | null> {
    return await CompanyModel.findById({ _id })
  }

  async deleteCompanyById(_id: string): Promise<ICompany | null> {
    return await CompanyModel.findByIdAndDelete({ _id })
  }

  async listCompanies(): Promise<ICompany[]> {
    return await CompanyModel.find()
  }

}

export default new CompanyRepository();