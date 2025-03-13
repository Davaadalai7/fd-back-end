import mongoose from "mongoose";

const categorysSchema = new mongoose.Schema({
  categoryName: { type: String, require: true },
  createdAt: { type: Date, require: true },
  updatedAt: { type: Date, require: true },
});

export const Category = mongoose.model("category", categorysSchema);
