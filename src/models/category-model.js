import mongoose from "mongoose";

const categorysSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const Category = mongoose.model("category", categorysSchema);
