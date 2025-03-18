import express from "express";
import { deleteFoodController } from "../controller/food/deleteFoodController.js";
import { checkFoodExists } from "../middleware/food/check-food-exists.js";
import { createFoodController } from "../controller/food/createFoodController.js";
import { getAllFoodController } from "../controller/food/getAllFoodController.js";
import { getFoodController } from "../controller/food/getFoodController.js";

export const foodRouter = express.Router();

foodRouter.delete("/:id", checkFoodExists, deleteFoodController);
foodRouter.post("/", createFoodController);
foodRouter.get("/", getAllFoodController);
foodRouter.get("/:id", getFoodController);

export default foodRouter;
