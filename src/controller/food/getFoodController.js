// import { Food } from "../../models/food-model.js";
// import { Types } from "mongoose";

// export const getFoodController = async (req, res) => {
//   try {
//     const foodId = req.params.id;
//     console.log("id", foodId);

//     // const food = await Food.findById(foodId);
//     const food = await Food.aggregate([
//       { $match: { _id: new Types.ObjectId(foodId) } },
//     ]).lookup({
//       from: "category",
//       localField: "category",
//       foreignField: "_id",
//       as: "category_data",
//     });

//     // const food = await Food.findById(foodId).populate("category").exec();

//     console.log("food", food);

//     if (!food) {
//       return res.status(404).json({ message: "Food item not found." });
//     }

//     return res.status(200).json(food);
//   } catch (error) {
//     console.error("Error fetching food item:", error);
//     return res
//       .status(500)
//       .json({ message: "Server error", error: error.message });
//   }
// };

import { Food } from "../../models/food-model.js";
import { Types } from "mongoose";

export const getFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    console.log("id", foodId);

    const food = await Food.aggregate([
      { $match: { _id: new Types.ObjectId(foodId) } },
      {
        $lookup: {
          from: "categories", // Make sure this matches your actual collection name
          localField: "category",
          foreignField: "_id",
          as: "category_data",
        },
      },
      { $unwind: "$category_data" }, // Unwind to get a single category object
    ]);

    console.log("food", food);

    if (food.length === 0) {
      return res.status(404).json({ message: "Food item not found." });
    }

    return res.status(200).json(food[0]); // Return the first item instead of an array
  } catch (error) {
    console.error("Error fetching food item:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
