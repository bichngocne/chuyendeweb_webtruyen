import { story, Category, story_category, user } from "../../models/index.js";
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
const showStoryApproved = async (req, res) => {
  try {
    const decryptedStoryP = 1;
    const stories = await story.findAll({ where: { status_approve: decryptedStoryP } });
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving stories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const showStoryPending = async (req, res) => {
  try {
    const decryptedStoryP = 0;
    const stories = await story.findAll({ where: { status_approve: decryptedStoryP } });
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving stories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
async function showAdmin(req, res) {
  try {
    // const id = decodeURIComponent(req.params.id);
    const decryptedStoryID = req.params.id;//decryptData(id,process.env.SEVER_SECRET_KEY_ID_STORY || 'this is secret');
    const storyById = await story.findOne({ where: { id: decryptedStoryID } });
    res.json({ storyById });
  } catch (error) {
    console.error("Error retrieving storyById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getCategoryOfStoryByIdAdmin(req, res) {
  try {
    // const id = decodeURIComponent(req.params.id);
    const decryptedStoryID = req.params.id;//decryptData(id,process.env.SEVER_SECRET_KEY_ID_STORY || 'this is secret');
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
async function getUserOfStoryByIdAdmin(req, res) {
  try {
    // const id = decodeURIComponent(req.params.id);
    const decryptedStoryID = req.params.id;//decryptData(id,process.env.SEVER_SECRET_KEY_ID_STORY || 'this is secret');
    const foundUser = await user.findOne({
      where: { id: decryptedStoryID },
      attributes: ["name", "email"],
    });
    res.json({ foundUser });
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export default { index,showStoryApproved,showStoryPending , showAdmin, getCategoryOfStoryByIdAdmin,getUserOfStoryByIdAdmin};