import { Router } from 'express';
const router = Router();
// import connect from "../configs/config.js";
import {Category} from '../models/index.js';
//[GET] class
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log(categories);
    return res.json({ categories });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;