import { Router } from 'express';
import {ChapperReader} from '../../controllers/index.js';
const router = Router();

router.get('/chapperInfo/:id', ChapperReader.getChapperById);

export default router;