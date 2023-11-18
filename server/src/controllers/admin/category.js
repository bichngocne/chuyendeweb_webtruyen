import {Category} from '../../models/index.js';
const getCategory = async (req, res) => {
  try {
    console.log('hih');
    const categories = await Category.findAll();
    console.log(categories);
    return res.json({ categories });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export default {getCategory}