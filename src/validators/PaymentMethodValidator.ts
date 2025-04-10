import { Card } from "@models/PaymentMethodModel";
import BaseValidator from "./BaseValidator";
import { z } from "zod";

class PaymentValidator extends BaseValidator<Card> {
  getRules() {
    return {
      cardLastFour: z.string().length(4).regex(/^\d{4}/, { message: "Deve conter exatamente 4 dígitos" }),
      expirationDate: z.string().transform(str => {
        const [day, month, year] = str.split('/').map(Number);
        return new Date(year, month - 1, day)
      }).refine(date => !isNaN(date.getTime()), { message: "Data inválida" }),
      cardName: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    }
  }
}

export default new PaymentValidator();