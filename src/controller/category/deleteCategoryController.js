import { Category } from "../../models/category-model.js";

export const deleteCategoryController = async (req, res) => {
  const { categoryName } = req.params;

  try {
    const deleteCategory = await Category.deleteOne({
      categoryName: categoryName,
    });
    res.status(200).json(deleteCategory);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: `Error category: ${error.message}` });
  }
};
