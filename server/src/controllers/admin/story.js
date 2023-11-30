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
      attributes: ['id','name', 'author','status_approve','status_chapter','id_user','createdAt'],
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
      attributes: ['id','name', 'author','status_approve','status_chapter','id_user','createdAt'],
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
    const categoryStory = await story_category.findAll({
      where: { id_story: decryptedStoryID },
      include: [Category],
    });
    res.json({ categoryStory });
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
  try {
    const storyIdToDelete = req.params.id;  
      await story.destroy({
        where: { id: storyIdToDelete },
      });

    return res.status(200).json({ success: true, message: 'Story and associated records deleted successfully.' });
  } catch (error) {
    console.error('Error deleting story and associated records:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}



async function getChapterOfStoryByIdAdmin(req, res) {
  try {
    const decryptedStoryID = req.params.id;

    // Xóa tất cả các chương có id_story bằng decryptedStoryID
    const result = await chapper.destroy({
      where: { id_story: decryptedStoryID },
    });

    res.json({ success: true, message: `${result} chapters deleted successfully.` });
  } catch (error) {
    console.error("Lỗi khi xóa chương:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function approveStory(req, res) {
  try {
    const decryptedStoryID = req.params.id;

    // Tìm câu chuyện theo ID và trạng thái chưa phê duyệt
    const storyToApprove = await story.findOne({
      where: {
        id: decryptedStoryID,
        status_approve: 0,
      },
    });

    if (storyToApprove) {
      // Nếu câu chuyện tồn tại và chưa được phê duyệt
      // Cập nhật trạng thái_approve từ 0 thành 1
      const updatedStory = await storyToApprove.update({ status_approve: 1 });

      // Trả về thông báo thành công và thông tin về câu chuyện đã được cập nhật
      res.json({ success: true, message: "Story approved successfully", updatedStory });
    } else {
      // Nếu câu chuyện không tồn tại hoặc đã được phê duyệt trước đó
      res.json({ success: false, message: "Story not found or already approved" });
    }
  } catch (error) {
    console.error("Error approving story:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}


export default { index,showStoryApprovedAdmin,showStoryPendingAdmin , showAdmin, getCategoryOfStoryByIdAdmin,getUserOfStoryByIdAdmin,findByIdAndDeleteAdmin,getChapterOfStoryByIdAdmin,approveStory};