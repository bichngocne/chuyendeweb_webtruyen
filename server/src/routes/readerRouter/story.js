import { Router } from 'express';
const router = Router();
import {storyReader} from '../../controllers/index.js';
//[GET] class
console.log('shdweu');
router.get('/storybyid/:id', storyReader.getStoryById);
router.get('/usePost/:id_user', storyReader.getUsePost);
router.get('/chapper/:id_story', storyReader.getChapperOfStory);
router.get('/commentofstory/:id_story', storyReader.getCommentOfStory);
router.get('/searchResults/?=:key', storyReader.searchStories);
router.get('/hotStories', storyReader.getHotStories);// danh sách 20 truyện đang hot
router.get('/hotStoriesByCategory/:id_category', storyReader.getHotStoriesByCategory);// truyện hot theo thể loại
router.get('/StoryUpdating', storyReader.getStoriesUpdating);// truyện mới cập nhật

export default router;