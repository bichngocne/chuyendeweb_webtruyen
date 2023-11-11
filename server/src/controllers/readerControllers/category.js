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
const getCategoryById = async (req, res) => {
  console.log("getCategoryById")
  const categoryId = req.params.id; // Lấy giá trị id từ đường dẫn URL

  try {
    const category = await Category.findByPk(categoryId);

    if (category) {
      return res.json({ category });
    } else {
      return res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    console.error("Error retrieving category:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {getCategory,getCategoryById}

