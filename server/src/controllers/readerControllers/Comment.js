import { user,Comment  } from "../../models/index.js";
const getAllComment = async (req, res) => {
    try {
      console.log("hih");
      const comments = await Comment.findAll();
      console.log(comments);
      return res.json({ comments });
    } catch (error) {
      console.error("Error retrieving comment:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  const getCommentById = async(req, res)=>{
    console.log("get comment by id")
    const commentId = req.params.id; // Lấy giá trị id từ đường dẫn URL

    try {
      const comments = await Comment.findByPk(commentId);
  
      if (comments) {
        return res.json({ comments });
      } else {
        return res.status(404).json({ error: "story not found" });
      }
    } catch (error) {
      console.error("Error retrieving comment by id:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  const getUserComment = async(req, res)=>{
    try {
      console.log("user comment");
      const {id_user } = req.params;
      const userInfo = await user.findByPk(id_user);
      if (!userInfo) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json({ userInfo });
    } catch (error) {
      console.error("Error retrieving user comment:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  export default {getAllComment, getCommentById, getUserComment}