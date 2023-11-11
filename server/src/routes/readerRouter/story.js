import { Router } from 'express';
const router = Router();
import {story} from '../../controllers/index.js';
//[GET] class
console.log('shdweu');
router.get('/stories', story.getStories);
router.get('/story/:id', story.getStoryById);
router.get('/usePost/:id_user', story.getUsePost);
router.get('/chapper/:id_story', story.getChapperOfStory);
export default router;