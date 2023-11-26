import {
  story,
  Category,
  story_category,
  chapper,
} from "../../models/index.js";
import { decryptData } from "../../utils/function.js";

//[STORE] submit chapper
async function store(req, res, next) {
  const id = req.body.id_story;
  const decryptedStoryID = decryptData(
    id,
    process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
  );
  const storyById = await story.findOne({ where: { id: decryptedStoryID } });
  // check number chapper belong story ?
  const numberChapperStory = storyById.total_chapper;
  const checkNumberChapper =
    0 < req.body.numberChapper && req.body.numberChapper <= numberChapperStory
      ? true
      : false;
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

//[GET] get detail chapper of story for truyện chữ

async function show1(req, res) {
  const id = decodeURIComponent(req.params.id_story);
  console.log(id);
  const decryptedStoryID = decryptData(
    id,
    process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
  );
  const numberChapper = req.params.number;
  const storyById = await story.findOne({ where: { id: decryptedStoryID } });
  // check number chapper belong story ?
  const numberChapperStory = storyById.total_chapper;
  const checkNumberChapper =
    0 < numberChapper && numberChapper <= numberChapperStory ? true : false;
  if (checkNumberChapper) {
    await chapper
      .findOne({
        where: { id_story: decryptedStoryID, number_chapper: numberChapper },
      })
      .then((chapper) => {
        return res.status(200).json({ chapper });
      })
      .catch((error) => {
        console.error("Error retrieving chapper:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } else {
    return res.status(400).json({
      success: false,
      message:
        "Ôi!!Số chương không tồn tại không truyện!!vui lòng kiểm tra lại",
    });
  }
}

export default { store, show1 };
