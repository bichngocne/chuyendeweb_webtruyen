import {
  story,
  Category,
  story_category,
  user,
  chapper,
  Comment,
} from "../../models/index.js";
import { Op } from "sequelize";
import Sequelize from'sequelize';
const getAllWordStory = async (req, res) => {
  try {
    console.log("hih");
    const stories = await story.findAll({
      where: {
        status_approve: 1,
        classifi: 0,
      },
    });
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
const getHotWordStories = async (req, res) => {
  try {
    const hotStories = await story.findAll({
      where: {
        status_approve: 1,
        classifi: 0,
      },
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
const getWordStoryOfCategory = async (req, res) => {
  try {
    console.log("type story");
    const { id_category } = req.params;

    // Thực hiện truy vấn để lấy các thể loại của câu chuyện với storyId
    const stories = await story_category.findAll({
      where: { id_category },
      include: {
        model: story,
          as: "story",
          where: {
            status_approve: 1,
            classifi: 0,
        },
      },

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
const getHotWordStoriesByCategory = async (req, res) => {
  try {
    console.log("getHotWordStoriesByCategory");
    const { id_category } = req.params;
    
    const hotStories = await story_category.findAll({
      include: [
        {
          model: story,
          as: "story",
          attributes: ["id", "view", "image", "name"],
          where: {
            status_approve: 1,
            classifi: 0,
          },
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

    res.json({ getHotWordStoriesByCategory: groupedStories });
  } catch (error) {
    console.error("Error retrieving story categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getWordStoriesUpdating = async (req, res) => {
  try {
    console.log("getStoriesUpdating");
    const storiesUpdating = await chapper.findAll({
      attributes: [
        "number_chapper",
        [Sequelize.literal('(SELECT MAX(`number_chapper`) FROM `chappers` WHERE `chappers`.`id_story` = `story`.`id`)'), 'max_chapter'],
        'updatedAt',
      ],
      include: [
        {
          model: story,
          attributes: ["id", "name", "createdAt", "updatedAt", "total_chapper"],
          where: {
            status_approve: 1,
            classifi: 0,
          },
        },
      ],
      where: Sequelize.literal(
        '`story`.`total_chapper` > (SELECT COUNT(*) FROM `chappers` WHERE `chappers`.`id_story` = `story`.`id`)'
      ),
      order: [["updatedAt", "DESC"]],
      limit: 20,
    });
    
    
    // Gửi kết quả về phía client dưới dạng JSON
    res.json({ storiesUpdating });
    
  } catch (error) {
    console.error("Error retrieving latest updated stories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getWordStoriesUpdatingByCategories = async (req, res) => {
  try {
    console.log("getStoriesUpdating");
   const categoryId = req.params.id_category; // Lấy categoryId từ đường dẫn API
   if (!categoryId) {
    return res.status(400).json({ error: "Missing categoryId in the request" });
  }

  const storiesUpdating = await chapper.findAll({
    attributes: [
      "number_chapper",
      [
        Sequelize.literal('(SELECT MAX(`number_chapper`) FROM `chappers` WHERE `chappers`.`id_story` = `story`.`id`)'),
      'max_chapter'
      ],
      'updatedAt',
      [Sequelize.literal('(SELECT id_category FROM `story_categories` WHERE `story_categories`.`id_story` = `story`.`id` LIMIT 1)'), 'categoryId'],
    ],
    include: [
      {
        model: story,
        as:"story",
        attributes: ["id", "name", "createdAt", "updatedAt", "total_chapper"],
        where: {
          status_approve: 1,
          classifi: 0,
        },
      },
    ],
    where: Sequelize.literal([
      '(',
      '  SELECT COUNT(*)',
      '  FROM story_categories sc',
      '  INNER JOIN stories ON sc.id_story = stories.id',
      '  WHERE  sc.id_category = :categoryId', // Using parameterized query
      ') > `story`.`total_chapper`'
    ].join('\n')),
    group: ['story.id'],
    having: Sequelize.literal('number_chapper < `story`.`total_chapper`'),
    replacements: { categoryId: categoryId }, // Bind the parameter value
    order: [["updatedAt", "DESC"]],
    limit: 20,
  });
    // Gửi kết quả về phía client dưới dạng JSON
    res.json({ storiesUpdating });
    
  } catch (error) {
    console.error("Error retrieving latest updated stories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default {
  getStoryCategories,
  getWordStoryOfCategory,
  getStoryById,
  getUsePost,
  getChapperOfStory,
  getCommentOfStory,
  searchStories,
  getHotWordStories,
  getHotWordStoriesByCategory,
  getWordStoriesUpdating,
  getWordStoriesUpdatingByCategories,
  getAllWordStory
};
