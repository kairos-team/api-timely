import { Router } from 'express';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';
import CompanyRouter from './CompanyRouter'

const router = Router();

router.use('/users', UserRouter);
router.use('/auth', AuthRouter);
router.use('/company', CompanyRouter)

export default router;
