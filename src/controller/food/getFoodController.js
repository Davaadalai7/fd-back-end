import { Food } from "../../models/food-model.js";

export const getFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({ message: "Food item not found." });
    }

    return res.status(200).json(food);
  } catch (error) {
    console.error("Error fetching food item:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
