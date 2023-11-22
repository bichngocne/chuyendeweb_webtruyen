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
      process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
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
      process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
    );
    const foundStory = await story_category.findAll({
      where: { id_story: decryptedStoryID },
      include: [Category,story],
    });
    console.log(foundStory);
    res.json({ foundStory });
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//[STORE] submit story screen
async function store(req, res, next) {
  try {
    
    var data = req.body;
    data.totalChap = Number(data.totalChap);
    data.classifi = Number(data.classifi);
    data.img = req.file.filename;
    console.log(data);
    const storyPost = await story
      .create({
        name: data.name,
        description: data.description,
        total_chapper: data.totalChap,
        author: data.author,
        status_approve: false,
        status_chapper: false,
        classifi: data.classifi,
        image: data.img,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    data.category.map(async (item) => {
      const story_categoryPost = await story_category.create({
        id_story: storyPost.id,
        id_category: decryptData(
          item,
          process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
        ),
      });
    });
    res.status(200).json({
      success: true,
      message: "Đăng truyện thành công",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Đăng truyện không thành công",
    });
  }
  // Thêm mảng images vào đối tượng data
}
export default { index, show, getCategoryOfStoryById, store };
