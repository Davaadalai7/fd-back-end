import express from "express";
import { GetCatergoryController } from "../controller/category/getCategoryController.js";
import { PostCatergoryController } from "../controller/category/postCategoryController.js";
import { deleteCategoryController } from "../controller/category/deleteCategoryController.js";

export const categoryRouter = express.Router();

categoryRouter.post("", PostCatergoryController);
categoryRouter.get("", GetCatergoryController);
categoryRouter.delete("", deleteCategoryController);
