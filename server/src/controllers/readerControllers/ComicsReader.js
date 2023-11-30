import Sequelize from "sequelize";
import { story, chapper,file } from "../../models/index.js";
const getAllComicsStoryUpdate = async (req, res) => {
  try {
    console.log("getAllComicsStoryUpdate");
    const comicsUpdate = await story.findAll({
      where: {
        status_approve: 1,
        classifi: 1,
        status_chapter: 0,
      },
    });
    return res.json({ comicsUpdate });
  } catch (error) {
    console.error("Error retrieving story:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllComicsStoryFull = async (req, res) => {
  try {
    console.log("getAllComicsStoryFull");
    const comicsFull = await story.findAll({
      where: {
        status_approve: 1,
        classifi: 1,
        status_chapter: 1,
      },
    });
    return res.json({ comicsFull });
  } catch (error) {
    console.error("Error retrieving story:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getHotComicsStory = async (req, res) => {
  try {
    const hotComics = await story.findAll({
      where: {
        status_approve: 1,
        classifi: 1,
      },
      order: [["view", "DESC"]], // Sắp xếp theo số lượt xem giảm dần
    });

    return res.json({ hotComics });
  } catch (error) {
    console.error("Error retrieving hot stories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getComicById = async (req, res) => {
  try {
    console.log("getComicById");
    const comicId = req.params.id;
    const Comic = await story.findByPk(comicId);

    if (Comic) {
      return res.json({ Comic });
    } else {
      return res.status(404).json({ error: "story not found" });
    }
  } catch (error) {
    console.error("Error retrieving Comic:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFileOfChapper = async (req, res) => {
  try {
    console.log("getFileOfChapper");
    const id_chapper = req.params.id;
    const ListFile = await file.findAll({
      where: { id_chapper },
    });
    // Gửi danh sách tên thể loại như phản hồi JSON
    res.json({ ListFile: ListFile });
  } catch (error) {
    console.error("Error retrieving Comic:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export default {
  getAllComicsStoryUpdate,
  getAllComicsStoryFull,
  getHotComicsStory,
  getComicById,
  getFileOfChapper
};
