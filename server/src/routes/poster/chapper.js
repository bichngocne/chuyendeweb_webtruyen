import { Router } from "express";
const router = Router();
// import connect from "../configs/config.js";
import { validatePostChapper1, validateUpdateChapper1 } from "../../middlewares/validation.js";
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
//[GET] chapper
router.get('/chapper0/:id_story/:number',chapperP.show1)
//[]
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
export default router;
