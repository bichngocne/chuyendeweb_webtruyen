import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {storyP} from '../../controllers/index.js';
//[GET] class
router.get('/stories', storyP.index);
router.get('/story/:id', storyP.show);
router.get('/story/category/:id', storyP.getCategoryOfStoryById);

export default router;