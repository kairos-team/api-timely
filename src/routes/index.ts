import { Router } from 'express';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';
import CompanyRouter from './CompanyRouter';
import PaymentRouter from './PaymentRouter';
import PaymentMethodRouter from './PaymentMethodRouter';



const router = Router();

router.use('/users', UserRouter);
router.use('/auth', AuthRouter);
router.use('/company', CompanyRouter);
router.use('/payment', PaymentRouter);
router.use('/payment-method', PaymentMethodRouter)

export default router;
