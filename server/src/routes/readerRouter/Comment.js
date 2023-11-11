import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {Comment} from '../../controllers/index.js';
//[GET] class
router.get('/comments', Comment.getAllComment);
router.get('/comments/:id', Comment.getCommentById);
router.get('/userComment/:id_user', Comment.getUserComment);

export default router;