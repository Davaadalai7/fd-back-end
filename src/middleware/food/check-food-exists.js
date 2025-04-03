import { Food } from "../../models/food-model.js";

export const checkFoodExists = async (req, res, next) => {
  const { id } = req.body;
  try {
    const food = await Food.findById({ _id: id });
    if (!food) {
      return res.status(404).json({ message: "Food item not found." });
    }
    req.food = food;

    next();
  } catch (error) {
    console.error("Error checking food existence:", error);
    res
      .status(500)
      .json({ message: "Error checking food existence", error: error.message });
  }
};
