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
    console.log(id);
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
      include: [Category, story],
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
    const storyPost = await story.create({
      name: data.name,
      description: data.description,
      total_chapper: data.totalChap,
      author: data.author,
      status_approve: false,
      classifi: data.classifi,
      image: data.img,
      view: 0,
      id_user: 2,
      deleted: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(storyPost.id);
    data.category.forEach(async (item) => {
      console.log(item);
      await story_category.create({
        id_story: storyPost.id,
        id_category: decryptData(
          item,
          process.env.SEVER_SECRET_KEY_CATEGORY || "this is secret"
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
      error,
    });
  }
  // Thêm mảng images vào đối tượng data
}

//[STORE] submit story screen
async function update(req, res, next) {
  try {
    var data = req.body;
    console.log(req.body);
    console.log("id story", data.id_story);
    const storyData = await story.findOne({
      where: {
        id: decryptData(
          data.id_story,
          process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
        ),
      },
    });
    console.log(storyData);
    var img;
    if (req.file) {
      img = req.file.filename;
    } else {
      img = req.body.imgOld;
    }
    console.log(img);

    data.category.forEach(async (item) => {
      const storyCateData = await story_category.findOne({
        where: {
          id_story: decryptData(
            data.id_story,
            process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
          ),
          id_category: decryptData(
            item,
            process.env.SEVER_SECRET_KEY_CATEGORY || "this is secret"
          ),
        },
      });
      if (!storyCateData) {
        await story_category.create({
          id_story: decryptData(
            data.id_story,
            process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
          ),
          id_category: decryptData(
            item,
            process.env.SEVER_SECRET_KEY_CATEGORY || "this is secret"
          ),
        });
      }
    });
    const categorySet = new Set(data.category);
    const categoryOldSet = new Set(data.categoryOld);
    const categoryDateNew = [...categoryOldSet].filter(
      (item) => !categorySet.has(item)
    );
    categoryDateNew.forEach(async (item) => {
      const storyCateData = await story_category.findOne({
        where: {
          id_story: decryptData(
            data.id_story,
            process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
          ),
          id_category: decryptData(
            item,
            process.env.SEVER_SECRET_KEY_CATEGORY || "this is secret"
          ),
        },
      });

      if (storyCateData) {
        await story_category.destroy({
          where: {
            id_story: decryptData(
              data.id_story,
              process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
            ),
            id_category: decryptData(
              item,
              process.env.SEVER_SECRET_KEY_CATEGORY || "this is secret"
            ),
          },
        });
      }
    });
    if (data.version == storyData.version + 1) {
      // console.log("vao duoc");
      await story
        .update(
          {
            name: data.name,
            description: data.description,
            total_chapper: Number(data.totalChap),
            author: data.author,
            image: img,
          },
          {
            where: {
              id: decryptData(
                data.id_story,
                process.env.SEVER_SECRET_KEY_ID_STORY || "this is secret"
              ),
            },
          }
        )
        .then(() => {
          res.status(200).json({
            success: true,
            message: "Cập nhật truyện thành công",
          });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Cập nhật truyện không thành công",
            error,
          });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Cập nhật truyện không thành công",
      error,
    });
  }
  // Thêm mảng images vào đối tượng data
}

export default { index, show, getCategoryOfStoryById, store, update };
