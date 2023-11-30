import {Category} from '../../models/index.js';
import { decryptData } from '../../utils/function.js';
import CryptoJS from "crypto-js";
const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.json({ categories });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const show = async (req, res) => {
  try {
    const decryptedStoryID = decryptData(
      req.params.id,
      process.env.SEVER_SECRET_KEY_CATEGORY || "this is secret"
    );
    const categories = await Category.findOne({ where: { id: decryptedStoryID } });
    return res.json({ categories });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {getCategory,show}

