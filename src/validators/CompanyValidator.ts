import { ICompany } from "@models/CompanyModel";
import BaseValidator from "./BaseValidator";
import { z } from 'zod';

class CompanyValidator extends BaseValidator<ICompany> {
    getRules() {
        return {
            name: z.string().min(2, { message: 'O nome deve ter pelo menos 3 caracteres' }),
            CNPJ: z.string().regex(/^\d{14}$/, { message: 'CNPJ deve conter exatamente 14 dígitos numéricos' })
        };
    }
}

export default new CompanyValidator();
