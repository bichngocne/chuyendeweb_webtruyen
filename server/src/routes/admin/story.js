import { Router } from "express";
const router = Router();
// import connect from "../configs/config.js";
import { storyA } from "../../controllers/index.js";
import { validatePostStory } from "../../middlewares/validation.js";
import { validationResult } from 'express-validator';
//[GET] class
router.get("/stories", storyA.index);
router.get("/storiesapproved", storyA.showStoryApproved);
router.get("/storiespending", storyA.showStoryPending);
router.get("/story/:id", storyA.show);
router.get("/story/category/:id", storyA.getCategoryOfStoryById);
router.get("/story/user/:id", storyA.getUserOfStoryById);
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
  storyA.index
);

export default router;