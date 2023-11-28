import { sequelize } from "../../database/connect.js";
import {
  story,
  Category,
  story_category,
  chapper,
  file,
} from "../../models/index.js";
import { decryptData } from "../../utils/function.js";
//associations chapper and file
const fileModel = chapper.hasMany(file, {
  foreignKey: "id_chapper",
  as: "files",
});
const ChapperModel = file.belongsTo(chapper, { foreignKey: "id_chapper" });
async function checkNumberChapper(storyId, numberChapper) {
  // Lấy thông tin story dựa trên storyId
  const storyById = await story.findOne({ where: { id: storyId } });

  // Kiểm tra số chương của câu chuyện
  const numberChapperStory = storyById.total_chapper;
  const isValidNumberChapper =
    0 < numberChapper && numberChapper <= numberChapperStory;

  return { isValidNumberChapper, storyById };
}
//[STORE] submit chapper for word story
async function store(req, res, next) {
  const decryptedStoryID = decryptData(
    req.body.id_story,
    process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
  );
  const { isValidNumberChapper, storyById } = await checkNumberChapper(
    decryptedStoryID,
    req.body.numberChapper
  );
  if (isValidNumberChapper) {
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
      message: "Ôi!!Số chương không tồn tại không truyện",
    });
  }
}
//[STORE] submit chapper for image story
async function store1(req, res, next) {
  const decryptedStoryID = decryptData(
    req.body.id_story,
    process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
  );
  const { isValidNumberChapper, storyById } = await checkNumberChapper(
    decryptedStoryID,
    req.body.numberChapper
  );
  if (isValidNumberChapper) {
    try {
      const createChapperImg = await chapper.create({
        title: req.body.name,
        number_chapper: req.body.numberChapper,
        id_story: storyById.id,
      });
      for (let i = 0; i < req.files.length; i++) {
        await file.create({
          id_chapper: createChapperImg.id,
          name: req.files[i].filename,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Đăng chương thành công",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Đăng chương không thành công",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Ôi!!Số chương không tồn tại không truyện",
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
      message: "Ôi !!Số chương không tồn tại không truyện",
    });
  }
}

//[GET] get detail chapper of story for image story
async function show2(req, res) {
  const id = decodeURIComponent(req.params.id_story);
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
      .findAll({
        where: { id_story: decryptedStoryID, number_chapper: numberChapper },
        include: fileModel,
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
      message: "Ôi !!Số chương không tồn tại không truyện",
    });
  }
}
//[PUT] update chapper
async function update(req, res) {
  console.log("update server");
  console.log(req.body);
  const decryptedChapperID = decryptData(
    req.body.id_chapper,
    process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
  );
  await chapper
    .update(
      { title: req.body.name, content: req.body.description },
      {
        where: { id: decryptedChapperID },
      }
    )
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Cập nhật chương thành công",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Cập nhật chương không thành công",
      });
    });
}

export default { store, show1, update, store1, show2 };
