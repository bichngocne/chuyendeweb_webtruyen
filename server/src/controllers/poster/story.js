import { story, Category } from "../../models/index.js";
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
      process.env.SEVER_SECRET_KEY_ID_STORY
      );
    const foundStory = await story.findOne({
      where: { id: decryptedStoryID },
      include: [{
        model:Category,
        as:'categories'
      }
      
      ], // Kết hợp câu chuyện với danh mục
    });
    console.log(foundStory);
    // if (foundStory) {
    //   // Tìm thấy câu chuyện
    //   console.log("Story:");
    //   console.log(foundStory.dataValues);
      
    //   if (foundStory.Categories) {
    //     // Danh sách các danh mục liên quan
    //     console.log("\nCategories:");
    //     console.log(foundStory.Categories.map((category) => category.dataValues));
    //   } else {
    //     console.log("Không có danh mục liên quan.");
    //   }
    // } else {
    //   console.log("Không tìm thấy câu chuyện với id =", decryptedStoryID);
    // }
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export default { index, show, getCategoryOfStoryById };
