
import { Router } from 'express';
const router = Router();
import { storyReader } from '../../controllers/index.js';

router.get('/story_categories/:id_story', storyReader.getStoryCategories);
router.get('/typeOfStory/:id_category', storyReader.getStoryOfCategory);

export default router;
