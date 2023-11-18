
import { Router } from 'express';
const router = Router();
import { categoryReader } from '../../controllers/index.js';

router.get('/categories/:id', categoryReader.getCategoryById);
router.get('/categories', categoryReader.getAllCategory);
// router.get('/categories/:id', category.getCategoryById
export default router;
