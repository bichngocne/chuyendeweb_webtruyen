import { Router } from 'express';
const router = Router();
import {storyReader} from '../../controllers/index.js';
//[GET] class
console.log('shdweu');
router.get('/AllWordStory', storyReader.getAllWordStory);
router.get('/storybyid/:id', storyReader.getStoryById);
router.get('/usePost/:id_user', storyReader.getUsePost);
router.get('/chapper/:id_story', storyReader.getChapperOfStory);
router.get('/commentofstory/:id_story', storyReader.getCommentOfStory);
router.get('/searchResults/?=:key', storyReader.searchStories);
router.get('/hotWordStories', storyReader.getHotWordStories);// danh sách 20 truyện đang hot
router.get('/hotWordStoriesByCategory/:id_category', storyReader.getHotWordStoriesByCategory);// truyện hot theo thể loại
router.get('/WordStoryUpdating', storyReader.getWordStoriesUpdating);// truyện mới cập nhật
router.get('/WordStoryUpdatingByCategory/:id_category', storyReader.getWordStoriesUpdatingByCategories);// truyện mới cập nhật

export default router;