import { Router } from 'express';
const router = Router();
import {story} from '../controllers/index.js';
//[GET] class
console.log('shdweu');
router.get('/stories', story.getAllStories);
export default router;