import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import { userA } from '../../controllers/index.js';
//[GET] class
router.get('/users', userA.index);

export default router;