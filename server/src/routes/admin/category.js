import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import { categoryA } from '../../controllers/index.js';
//[GET] class
router.get('/categories', categoryA.getCategory);

export default router;