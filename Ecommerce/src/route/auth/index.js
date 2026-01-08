







import express from 'express';
import { signUpController } from '../../controller/auth/index.js';
const router=express.Router();

router.post('/signup',signUpController)
export default router
