import mongoose from "mongoose";

const foodsSchema = new mongoose.Schema({
  foodName: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  ingredients: { type: String },
  category: { type: mongoose.type.ObjectId },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const Food = mongoose.model("food", foodsSchema);
