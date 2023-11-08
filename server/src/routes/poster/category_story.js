import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {category_storyP} from '../../controllers/index.js';
//[GET] class
router.get('/category_story', category_storyP.index);

export default router;