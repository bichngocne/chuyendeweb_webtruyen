import { Router } from "express";
const router = Router();
// import connect from "../configs/config.js";
import { storyA } from "../../controllers/index.js";
import { validatePostStory } from "../../middlewares/validation.js";
import { validationResult } from 'express-validator';
//[GET] class
router.get("/stories", storyA.index);
router.get("/storyAdmin/:id", storyA.showAdmin);
router.get("/storyAdmin/category/:id", storyA.getCategoryOfStoryByIdAdmin);
router.get("/storyAdmin/user/:id", storyA.getUserOfStoryByIdAdmin);
router.get("/storiesapproved", storyA.showStoryApprovedAdmin);
router.get("/storiespending", storyA.showStoryPendingAdmin);
router.get("/story/:id", storyA.showAdmin);
router.get("/story/item/:id", storyA.findByIdAndDeleteAdmin);
router.get("/story/item1/:id", storyA.getChapterOfStoryByIdAdmin);
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