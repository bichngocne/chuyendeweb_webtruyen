import { Router } from "express";
const router = Router();
// import connect from "../configs/config.js";
import { storyP } from "../../controllers/index.js";
import { validatePostStory } from "../../middlewares/validation.js";
import { validationResult } from 'express-validator';
import multer from 'multer';
import { storage, imageFilter } from '../../middlewares/uploads.js'; // Import middleware
//[GET] class
router.get("/stories", storyP.index);
router.get("/story/:id", storyP.show);
router.get("/story/category/:id", storyP.getCategoryOfStoryById);
//upload file 

var upload = multer({ storage: storage, fileFilter: imageFilter, limits: { fileSize: 10 * 1024 * 1024 } });
router.post('/story/demo',upload.array('img'),(req,res)=>{
 res.send('híd');

})
router.post(
  "/story/create",
  upload.single("img"),
  function (req, res, next) {
    console.log(req.body);
    if (req.fileValidationError) {
      console.error("Lỗi khi tải lên:", req.fileValidationError);
      return res
        .status(500)
        .json({
          error:
            "Lỗi khi tải lên hình ảnh. Vui lòng chọn một hình ảnh và định dạng đúng (jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)",
        });
    }
    console.log("Upload thành công", req.file);
    console.log(req.body);
    next();
  },
  validatePostStory(),
  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  storyP.store
);


export default router;
