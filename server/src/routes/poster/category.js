import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {categoryP} from '../../controllers/index.js';
//[GET] all category
router.get('/categories', categoryP.getCategory);
//[GET] category by id
router.get('/category/:id', categoryP.show);

export default router;