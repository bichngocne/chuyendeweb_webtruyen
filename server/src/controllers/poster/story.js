import { story, Category, story_category } from "../../models/index.js";
import { decryptData } from "../../utils/function.js";
const index = async (req, res) => {
  try {
    const stories = await story.findAll();
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving stories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
async function show(req, res) {
  try {
    const id = decodeURIComponent(req.params.id);
    const decryptedStoryID = decryptData(
      id,
      process.env.SEVER_SECRET_KEY_ID_STORY
    );
    const storyById = await story.findOne({ where: { id: decryptedStoryID } });
    res.json({ storyById });
  } catch (error) {
    console.error("Error retrieving storyById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getCategoryOfStoryById(req, res) {
  try {
    const id = decodeURIComponent(req.params.id);
    const decryptedStoryID = decryptData(
      id,
      process.env.SEVER_SECRET_KEY_ID_STORY || 'secret'
      );
      console.log(decryptedStoryID);
    const foundStory = await story_category.findAll({
      where: { id_story: decryptedStoryID },
      include: [
       Category
      ], 
    });
    res.json({ foundStory });
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export default { index, show, getCategoryOfStoryById };
