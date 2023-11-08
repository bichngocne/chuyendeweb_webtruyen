import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {story} from '../../controllers/index.js';
//[GET] class
router.get('/stories', story.index);
router.get('/story/:id', story.show);

export default router;