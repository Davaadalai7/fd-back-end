import { Category } from "../../models/category-model.js";

export const GetCatergoryController = async (req, res) => {
  try {
    const getCategory = await Category.find({});
    res.status(200).json(getCategory);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: `Error category: ${error.message}` });
  }
};
