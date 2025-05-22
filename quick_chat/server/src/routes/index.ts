import {Router} from 'express';
const router = Router();
import AuthController from '../controllers/UserController.js';

//Auth routes
router.post('/auth/login', AuthController.login);
export default router;  