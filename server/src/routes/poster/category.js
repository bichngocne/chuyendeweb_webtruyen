import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {categoryP} from '../../controllers/index.js';
//[GET] class
router.get('/categories', categoryP.getCategory);

export default router;