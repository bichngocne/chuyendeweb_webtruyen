import { Router } from 'express';
const router = Router();
import {comicsReader} from '../../controllers/index.js';
router.get('/getAllComicsStoryUpdate', comicsReader.getAllComicsStoryUpdate);
router.get('/getAllComicsStoryFull', comicsReader.getAllComicsStoryFull);
router.get('/getHotComicsStory', comicsReader.getHotComicsStory);
router.get('/comic/:id', comicsReader.getComicById);
router.get('/fileOfChapper/:id', comicsReader.getFileOfChapper);
export default router;