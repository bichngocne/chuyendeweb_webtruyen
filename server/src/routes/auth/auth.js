import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {auth} from '../../controllers/index.js';
//[GET] class
router.post('/login', auth.login);
router.post('/register', auth.register);

export default router;