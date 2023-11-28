import { Router } from "express";
const router = Router();
// import connect from "../configs/config.js";
import { validatePostChapper1, validatePostChapper2, validateUpdateChapper1 } from "../../middlewares/validation.js";
import { validationResult } from 'express-validator';
import multer from 'multer';
import { storage, imageFilter } from '../../middlewares/uploads.js'; // Import middleware
import { chapperP } from "../../controllers/index.js";

//[POST] chapper
router.post(
  "/chapper0/create",
  validatePostChapper1(),
  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  chapperP.store
);
//[GET] chapper for word story
router.get('/chapper0/:id_story/:number',chapperP.show1)
//[GET] chapper for word story
router.get('/chapper1/:id_story/:number',chapperP.show2)
//[PUT] update story
router.put(
  "/chapper0/edit",
  validateUpdateChapper1(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  chapperP.update
);
var upload = multer({ storage: storage, fileFilter: imageFilter, limits: { fileSize: 10 * 1024 * 1024 } });
router.post(
  "/chapper1/create",
  upload.array("img"),
  function (req, res, next) {
    console.log(req.body);
    try {
      if (req.fileValidationError) {
        console.error("Lỗi khi tải lên:", req.fileValidationError);
        return res
          .status(500)
          .json({
            error:
              "Lỗi khi tải lên hình ảnh. Vui lòng chọn ít nhất một hình ảnh và định dạng đúng (jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)",
          });
      }
      next();
    } catch (error) {
      return res
          .status(500)
          .json({
            error:
              "Lỗi khi tải lên hình ảnh. Vui lòng chọn ít nhất một hình ảnh và định dạng đúng (jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)",
          });
    }
  },
  validatePostChapper2(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  chapperP.store1
);
export default router;
