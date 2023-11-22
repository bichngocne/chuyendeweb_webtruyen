import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {category} from '../controllers/index.js';
//[GET] class
router.get('/categories', category.getAllCategory);
// router.get('/categories/:id', category.getCategoryById);

export default router;