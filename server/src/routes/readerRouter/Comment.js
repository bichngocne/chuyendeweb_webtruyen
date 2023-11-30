import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {Comment} from '../../controllers/index.js';
//[GET] class
router.get('/comments', Comment.getAllComment);
router.get('/commentByid/:id', Comment.getCommentById);
router.get('/userComment/:id_user', Comment.getUserComment);
router.get('/comments/sorted', Comment.getCommentBySort);
router.post('/createrComment', Comment.creatComment);

export default router;