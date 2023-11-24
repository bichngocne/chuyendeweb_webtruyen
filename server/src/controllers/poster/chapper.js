import { story, Category, story_category,chapper } from "../../models/index.js";
import { decryptData } from "../../utils/function.js";

//[STORE] submit chapper
async function store(req, res, next) {
  try {
    var data = req.body;
    console.log(data);
    res.status(200).json({
      success: true,
      message: "Đăng chương thành công",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Đăng chương không thành công",
      error
    });
  }
}
export default { store };
