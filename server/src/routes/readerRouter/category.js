
import { Router } from 'express';
const router = Router();
import { categoryReader } from '../../controllers/index.js';

router.get('/categories/:id', categoryReader.getCategoryById);

export default router;