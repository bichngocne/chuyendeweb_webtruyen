import { user, Comment, story } from "../../models/index.js";
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
const getCommentById = async (req, res) => {
  console.log("get comment by id");
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
};
const getUserComment = async (req, res) => {
  try {
    console.log("user comment");
    const { id_user } = req.params;
    const userInfo = await user.findByPk(id_user);
    if (!userInfo) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ userInfo });
  } catch (error) {
    console.error("Error retrieving user comment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCommentBySort = async (req, res) => {
  try {
    console.log("getCommentBySort");
    const sortBy = req.query.sortBy || "createdAt"; // Mặc định sắp xếp theo createdAt
    const sortOrder = req.query.sortOrder === "asc" ? "asc" : "desc"; // Kiểm tra nếu là 'asc' thì sắp xếp tăng dần, ngược lại giảm dần

    const sortedComments = await Comment.findAll({
      order: [[sortBy, sortOrder]],
    });

    res.json({ comments: sortedComments });
  } catch (error) {
    console.error("Error retrieving user comment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const creatComment = async (req, res) => {
  console.log("creatComment");
  const { id_story, id_user, content, star } = req.body;
  
  // Kiểm tra content
  if (!content || content.trim().length < 5 || content.trim().startsWith(" ")) {
    setError("Content must have at least 5 characters and should not start with a space.");
    return;
  }

  // Kiểm tra star
  if (!star || star <= 0) {
    setError("Star rating is required and must be greater than 0.");
    return;
  }

  // // Kiểm tra content chỉ chứa các ký tự không đặc biệt như . , :
  // const specialCharactersRegex = /^[a-zA-Z0-9.,: ]*$/;

  // if (!specialCharactersRegex.test(content)) {
  //   return res.status(400).json({ error: 'Content can only contain letters, numbers, spaces, and the following characters: . , :' });
  // }

  try {
    // Kiểm tra xem người dùng và story tồn tại
    const users = await user.findOne({ where: { id: id_user } });
    const stories = await story.findOne({ where: { id: id_story } });

    if (!users || !stories) {
      return res.status(404).json({ error: 'User or story not found' });
    }

    // Kiểm tra xem đã có comment từ user cho story chưa
    const existingComment = await Comment.findOne({
      where: { id_user: id_user, id_story: id_story },
    });

    if (existingComment) {
      return res.status(400).json({ error: 'Bạn đã comment story này' });
    }

    // Tạo comment liên kết với user và story
    const newComment = await Comment.create({
      content,
      star,
      id_user: id_user,
      id_story: id_story,
    });

    return res.json({ comment: newComment });
  } catch (error) {
    console.error('Error creating comment:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllComment,
  getCommentById,
  getUserComment,
  getCommentBySort,
  creatComment
};
