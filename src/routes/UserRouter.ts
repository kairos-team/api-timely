import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from 'middlewares/authMiddleware';

const router = Router();

router.post('/', UserController.createUser);
router.get('/email/:email', UserController.getUserEmail);
router.get('/id/:id', authMiddleware, UserController.findUserById)
router.get('/', UserController.listUsers)
router.put('/:id', authMiddleware, UserController.updateUserById)
router.delete('/:id', authMiddleware, UserController.deleteUserById)

export default router;
