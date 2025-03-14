import mongoose from "mongoose";

const categorysSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const Category = mongoose.model("category", categorysSchema);
