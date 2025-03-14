import { Food } from "../../models/food-model.js";

export const createFoodController = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;

    if (!foodName || !price || !image) {
      return res
        .status(400)
        .json({ message: "Food name, price, and image are required." });
    }

    const newFood = new Food({
      foodName,
      price,
      image,
      ingredients,
      category,
    });

    await newFood.save();

    res
      .status(201)
      .json({ message: "Food item created successfully", food: newFood });
  } catch (error) {
    console.error("Error creating food item:", error);
    res
      .status(500)
      .json({ message: "Error creating food item", error: error.message });
  }
};
