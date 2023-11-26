import { story, Category, story_category, user, chapper } from "../../models/index.js";
const index = async (req, res) => {
  try {
    const stories = await story.findAll();
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving stories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const showStoryApprovedAdmin = async (req, res) => {
  try {
    const decryptedStoryP = 1;
    const stories = await story.findAll({ 
      attributes: ['id','name', 'author','status_chapter','id_user','createdAt'],
      where: { status_approve: decryptedStoryP } });
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving stories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const showStoryPendingAdmin = async (req, res) => {
  try {
    const decryptedStoryP = 0;
    const stories = await story.findAll({ 
      attributes: ['id','name', 'author','status_chapter','id_user','createdAt'],
      where: { status_approve: decryptedStoryP } });
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
async function findByIdAndDeleteAdmin(req, res) {
  const itemId = req.params.id;
  try {
    // Tìm câu chuyện cần xóa và bao gồm tất cả các chương
    const storyToDelete = await story.findByPk(itemId, {
      include: [chapper],
    });

    if (!storyToDelete) {
      return res.status(404).json({ success: false, message: 'Story not found.' });
    }

    // Bắt đầu một giao dịch để đảm bảo tính toàn vẹn dữ liệu
    await sequelize.transaction(async (t) => {
      // Xóa câu chuyện
      await storyToDelete.destroy({ transaction: t });

      // Xóa tất cả các chương liên quan
      await chapper.destroy({
        where: {
          storyId: itemId,
        },
        transaction: t,
      });
    });

    return res.status(200).json({ success: true, message: 'Story and associated chapters deleted successfully.' });
  } catch (error) {
    console.error('Error deleting story and chapters:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

export default { index,showStoryApprovedAdmin,showStoryPendingAdmin , showAdmin, getCategoryOfStoryByIdAdmin,getUserOfStoryByIdAdmin,findByIdAndDeleteAdmin};