import { Router } from 'express';
import  signUp ,{logIn} from '../controllers/auth.controller.js';

const userRouter = Router();
userRouter.post('/sign-up', signUp);
userRouter.post('/log-in',logIn);

export default userRouter;
