import CompanyModel, {ICompany} from "@models/CompanyModel";
import mongoose from "mongoose";

class CompanyRepository {
  async createCompany(data: Partial<ICompany>): Promise<ICompany> {
    return await CompanyModel.create(data);
  }

  async findCompanyByOwnerId(ownerId: mongoose.Types.ObjectId): Promise<ICompany | null> {
    return await CompanyModel.findOne({ ownerId })
  }

  async deleteCompanyByCompanyId(companyId: mongoose.Types.ObjectId): Promise<ICompany | null> {
    return await CompanyModel.findOneAndDelete(companyId)
  }

  async findCompanies(): Promise<ICompany[]> {
    return await CompanyModel.find()
  }

}

export default new CompanyRepository();