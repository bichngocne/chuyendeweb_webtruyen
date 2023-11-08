import { story, Category, story_category, user } from "../models/index.js";
const getStories = async (req, res) => {
  try {
    console.log("hih");
    const stories = await story.findAll();
    console.log(stories);
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving story:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getStoryById = async (req, res) => {
  console.log("getStoryById");
  const storyId = req.params.id; // Lấy giá trị id từ đường dẫn URL

  try {
    const stories = await story.findByPk(storyId);

    if (stories) {
      return res.json({ stories });
    } else {
      return res.status(404).json({ error: "story not found" });
    }
  } catch (error) {
    console.error("Error retrieving story:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getStoryCategories = async (req, res) => {
  try {
    console.log("story_category");
    const { id_story } = req.params;

    // Thực hiện truy vấn để lấy các thể loại của câu chuyện với storyId
    const categories = await story_category.findAll({
      where: { id_story },
      include: [Category],
    });
    // Gửi danh sách tên thể loại như phản hồi JSON
    res.json({ storyCategory: categories });
  } catch (error) {
    console.error("Error retrieving story categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getStoryOfCategory = async (req, res) => {
  try {
    console.log("type story");
    const { id_category } = req.params;

    // Thực hiện truy vấn để lấy các thể loại của câu chuyện với storyId
    const stories = await story_category.findAll({
      where: { id_category },
      include: [story],
    });
    // Gửi danh sách tên thể loại như phản hồi JSON
    res.json({ stories: stories });
  } catch (error) {
    console.error("Error retrieving story categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getUsePost = async (req, res) => {
  try {
    console.log("Use Post");
    const { id_user } = req.params;
    const userInfo = await user.findByPk(id_user);

    if (!userInfo) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ userInfo });
  } catch (error) {
    console.error("Error retrieving user post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default {
  getStories,
  getStoryCategories,
  getStoryOfCategory,
  getStoryById,
  getUsePost
};
