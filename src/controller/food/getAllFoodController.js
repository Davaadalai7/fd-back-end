import { Food } from "../../models/food-model.js";

export const getAllFoodController = async (req, res) => {
  try {
    const foods = await Food.find();

    if (foods.length === 0) {
      return res.status(404).json({ message: "No food items found." });
    }

    res.status(200).json(foods);
  } catch (error) {
    console.error("Error fetching food items:", error);
    res
      .status(500)
      .json({ message: "Error fetching food items", error: error.message });
  }
};
