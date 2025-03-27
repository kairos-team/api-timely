import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/', UserController.createUser);
router.get('/email/:email', UserController.getUserEmail);
router.get('/id/:id', UserController.findById)
router.get('/', UserController.listUsers)
router.put('/:id', UserController.updateUserById)
router.delete('/:id', UserController.deleteUserById)

export default router;
