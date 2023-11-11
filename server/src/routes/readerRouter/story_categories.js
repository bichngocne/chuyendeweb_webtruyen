
import { Router } from 'express';
const router = Router();
import { story } from '../../controllers/index.js';

router.get('/story_categories/:id_story', story.getStoryCategories);
router.get('/typeOfStory/:id_category', story.getStoryOfCategory);

export default router;
