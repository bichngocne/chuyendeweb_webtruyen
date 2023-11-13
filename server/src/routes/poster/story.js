import { Router } from "express";
const router = Router();
// import connect from "../configs/config.js";
import { storyP } from "../../controllers/index.js";
import { validatePostStory } from "../../middlewares/validation.js";
import { validationResult } from 'express-validator';
//[GET] class
router.get("/stories", storyP.index);
router.get("/story/:id", storyP.show);
router.get("/story/category/:id", storyP.getCategoryOfStoryById);
router.post(
  "/story/create",validatePostStory(),
  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next();
  },
  storyP.index
);

export default router;
