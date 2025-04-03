import { Router } from "express";
import CompanyController from "@controllers/CompanyController";
import authMiddleware from "middlewares/authMiddleware";

const router = Router();

router.post('/', CompanyController.createCompany)
router.get('/:id', authMiddleware, CompanyController.findCompanyById)
router.get('/', CompanyController.listCompanies)
router.put('/:id', authMiddleware, CompanyController.updateCompanyById)
router.delete('/:id', authMiddleware, CompanyController.deleteCompanyById)

export default router;