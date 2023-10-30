import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {category} from '../controllers/index.js';
//[GET] class
router.get('/categories', category.getCategory);

export default router;