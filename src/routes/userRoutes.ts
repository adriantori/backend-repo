import { Router } from 'express';
import { updateUserData, fetchUserData, helloWorld } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/get-user/:userId', authMiddleware, fetchUserData);
router.get('/', helloWorld)

router.put('/update-user', authMiddleware, updateUserData);

export { router as userRoutes };
