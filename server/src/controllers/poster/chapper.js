import {
  story,
  Category,
  story_category,
  chapper,
} from "../../models/index.js";
import { decryptData } from "../../utils/function.js";

//[STORE] submit chapper
async function store(req, res, next) {
  var data = req.body;
  console.log(data);
  const id = req.body.id_story;
  console.log(id);
  const decryptedStoryID = decryptData(
    id,
    process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
  );
  console.log(decryptedStoryID);
  const storyById = await story.findOne({ where: { id: decryptedStoryID } });
  // check number chapper belong story ?
  const numberChapperStory = storyById.total_chapper;
  const checkNumberChapper =
    0 < req.body.numberChapper && req.body.numberChapper <= numberChapperStory
      ? true
      : false;
  console.log(checkNumberChapper);
  if (checkNumberChapper) {
    await chapper
      .create({
        title: req.body.name,
        content: req.body.description,
        number_chapper: req.body.numberChapper,
        id_story: storyById.id,
      })
      .then(() => {
        return res.status(200).json({
          success: true,
          message: "Đăng chương thành công",
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          message: "Đăng chương không thành công",
        });
      });
  } else {
    return res.status(400).json({
      success: false,
      message:
        "Ôi!!Số chương không tồn tại không truyện!!vui lòng kiểm tra lại",
    });
  }
}
export default { store };
