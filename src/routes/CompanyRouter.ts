import { Router } from "express";
import CompanyController from "@controllers/CompanyController";

const router = Router();

router.post('/', CompanyController.createCompany)
router.get('/:id', CompanyController.findCompanyById)
router.get('/', CompanyController.listCompanies)
router.put('/:id', CompanyController.updateCompanyById)
router.delete('/:id', CompanyController.deleteCompanyById)

export default router;