import { Router } from 'express';
const router = Router();
import {storyReader} from '../../controllers/index.js';
//[GET] class
console.log('shdweu');
router.get('/story/:id', storyReader.getStoryById);
router.get('/usePost/:id_user', storyReader.getUsePost);
router.get('/chapper/:id_story', storyReader.getChapperOfStory);
export default router;