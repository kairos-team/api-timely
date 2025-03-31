import { Router } from 'express';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';
import CompanyRouter from './CompanyRouter';
import PaymentRouter from './PaymentRouter';


const router = Router();

router.use('/users', UserRouter);
router.use('/auth', AuthRouter);
router.use('/company', CompanyRouter);
router.use('payment', PaymentRouter);

export default router;
