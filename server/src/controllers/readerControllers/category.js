import {Category} from '../../models/index.js';
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

export default {getCategoryById}

