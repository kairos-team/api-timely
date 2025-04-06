import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from 'middlewares/authMiddleware';
import UserValidator from '@validators/UserValidator';

const router = Router();

router.post('/', (req, res, next) => UserValidator.validator(req.body, next), UserController.createUser);
router.get('/email/:email', UserController.getUserEmail);
router.get('/id/:id', authMiddleware, UserController.findUserById)
router.get('/', UserController.listUsers)
router.put('/:id', authMiddleware, UserController.updateUserById)
router.delete('/:id', authMiddleware, UserController.deleteUserById)

export default router;
