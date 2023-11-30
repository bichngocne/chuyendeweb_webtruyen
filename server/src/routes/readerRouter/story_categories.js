
import { Router } from 'express';
const router = Router();
import { storyReader } from '../../controllers/index.js';

router.get('/story_categories/:id_story', storyReader.getStoryCategories);
router.get('/typeOfWordStory/:id_category', storyReader.getWordStoryOfCategory);

export default router;
