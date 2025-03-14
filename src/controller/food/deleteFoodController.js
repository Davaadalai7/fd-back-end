import { Food } from "../../models/food-model.js";

export const deleteFoodController = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await Food.findByIdAndDelete(id);
    if (!food) {
      return res.status(404).json({ message: "Food item not found." });
    }

    res.status(200).json({ message: "Food item deleted successfully." });
  } catch (error) {
    console.error("Error deleting food:", error);
    res
      .status(500)
      .json({ message: "Error deleting food item", error: error.message });
  }
};
