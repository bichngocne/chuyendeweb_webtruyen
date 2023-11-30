import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import { chapperA } from '../../controllers/index.js';
//[GET] class
router.get('/chappers', chapperA.index);

export default router;