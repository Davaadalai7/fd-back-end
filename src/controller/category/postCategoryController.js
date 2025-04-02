import { Category } from "../../models/category-model.js";

export const PostCatergoryController = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await Category.create({ categoryName: categoryName });
    res
      .status(200)
      .json({ success: true, message: "category created", data: category });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: `Error category: ${error.message}` });
  }
};
