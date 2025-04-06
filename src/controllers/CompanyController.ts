import { Request, Response, NextFunction } from "express";
import CompanyService from "@services/CompanyService";
import ApiResponseHandler from "@utils/ApiResponseHandler";


class CompanyController {
  async createCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const newCompany = await CompanyService.createCompany(req.body);
      return ApiResponseHandler.success(res, newCompany, 201);
    } catch (error) {
      next(error);
    }
  }

  async findCompanyById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const company = await CompanyService.findCompanyById(id);
      return ApiResponseHandler.success(res, company);
    } catch (error) {
      next(error);
    }
  }

  async updateCompanyById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const company = await CompanyService.updateCompanyById(id, req.body);
      return ApiResponseHandler.success(res, company);
    } catch (error) {
      next(error);
    }
  }

  async deleteCompanyById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const company = await CompanyService.deleteCompanyById(id);
      return ApiResponseHandler.success(res, company);
    } catch (error) {
      next(error);
    }
  }

  async listCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const companies = await CompanyService.listCompanies();
      return ApiResponseHandler.success(res, companies);
    } catch (error) {
      next(error);
    }
  }

}

export default new CompanyController();