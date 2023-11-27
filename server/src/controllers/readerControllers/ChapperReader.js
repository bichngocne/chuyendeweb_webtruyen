import { user,Comment, story,chapper  } from "../../models/index.js";
const getChapperById = async (req, res) => {
  try {
    console.log("getChapperById");
  const chapperId = req.params.id; // Lấy giá trị id từ đường dẫn URL
console.log(chapperId);
  try {
    const chapperInfo = await chapper.findByPk(chapperId,
      {
        include: [{ model: story, as: 'story' }],
      });
    if (chapperInfo) {
      return res.json({ chapperInfo });
    } else {
      return res.status(404).json({ error: "chapper not found" });
    }
  } catch (error) {
    console.error("Error retrieving story:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
  } catch (error) {
    console.error("Error retrieving chapper:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default {
  getChapperById
}