import express from "express";
import { deleteFoodController } from "../controller/food/deleteFoodController.js";
import { checkFoodExists } from "../middleware/food/check-food-exists.js";
import { createFoodController } from "../controller/food/createFoodController.js";

export const foodRouter = express.Router();

foodRouter.delete("/:id", checkFoodExists, deleteFoodController);
foodRouter.post("/", createFoodController);

export default foodRouter;
