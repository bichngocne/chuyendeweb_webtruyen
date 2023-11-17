import {
  story,
  Category,
  story_category,
  user,
  chapper,
  Comment,
} from "../../models/index.js";
import { Op } from "sequelize";

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
const getHotStories = async (req, res) => {
  try {
    const hotStories = await story.findAll({
      order: [["view", "DESC"]], // Sắp xếp theo số lượt xem giảm dần
      limit: 20, // Giới hạn số lượng truyện trả về
    });

    return res.json({ hotStories });
  } catch (error) {
    console.error("Error retrieving hot stories:", error);
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
const getChapperOfStory = async (req, res) => {
  try {
    console.log("chapper of story");
    const { id_story } = req.params;
    // Thực hiện truy vấn để lấy các thể loại của câu chuyện với storyId
    const chappers = await chapper.findAll({
      where: { id_story },
    });
    // Gửi danh sách tên thể loại như phản hồi JSON
    res.json({ chappers: chappers });
  } catch (error) {
    console.error("Error retrieving chapper:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCommentOfStory = async (req, res) => {
  try {
    console.log("getCommentOfStory");
    const { id_story } = req.params;
    // Lấy danh sách comment của câu chuyện với id_story
    const comments = await Comment.findAll({
      where: { id_story },
    });

    // Trả về danh sách comment
    res.json({ comments: comments });
  } catch (error) {
    console.error("Error retrieving comments:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const searchStories = async (req, res) => {
  const searchTerm = req.query.q; // Lấy giá trị truy vấn từ tham số "q"

  try {
    const results = await story.findAll({
      where: {
        title: {
          [Op.iLike]: `%${searchTerm}%`, // Sử dụng Op.iLike để tìm kiếm không phân biệt chữ hoa/chữ thường
        },
      },
    });

    res.json({ stories: results });
  } catch (error) {
    console.error("Error searching stories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getHotStoriesByCategory = async (req, res) => {
  try {
    console.log("getHotStoriesByCategory");
    const { id_category } = req.params;
    
    const hotStories = await story_category.findAll({
      include: [
        {
          model: story,
          as: "story",
          attributes: ["id", "view", "image", "name"],
        },
        {
          model: Category,
          as: "Category",
          attributes: ["id"],
          where: { id: id_category },
        },
      ],

      order: [[{ model: story, as: "story" }, "view", "DESC"]],
      limit: 20,
    });

    const groupedStories = {};
    groupedStories[id_category] = hotStories.map((storyCategory) => storyCategory.story);

    res.json({ HotStoriesByCategory: groupedStories });
  } catch (error) {
    console.error("Error retrieving story categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getStoriesUpdating = async (req, res) => {
  try {
    console.log("getStoriesUpdating");
    const latestUpdatedStories = await story.findAll({
      attributes: ["id", "name", "updatedAt"],
      include: [
        {
          model: chapper,
          as: "chapper",
          attributes: ["id"],
          attributes: ["number_chapper", "updatedAt"],
        },
      ],
      order: [["updatedAt", "DESC"]],
      limit: 20,
    });

    const formattedStories = latestUpdatedStories.map((story) => {
      console.log(story.Chapters);
      const latestChapter = story.Chapters.length > 0 ? story.Chapters[0] : null;

      return {
        name: story.name,
        latestChapter: latestChapter ? latestChapter.title : null,
        updatedAt: latestChapter ? latestChapter.updatedAt : null,
      };
    });

    res.json({ LatestUpdatedStories: formattedStories });
  } catch (error) {
    console.error("Error retrieving latest updated stories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default {
  getStoryCategories,
  getStoryOfCategory,
  getStoryById,
  getUsePost,
  getChapperOfStory,
  getCommentOfStory,
  searchStories,
  getHotStories,
  getHotStoriesByCategory,
  getStoriesUpdating
};
