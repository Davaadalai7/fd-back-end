import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  address: { type: String },
  phoneNumber: { type: String },
  ttl: { type: Date },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export const User = mongoose.model("user", usersSchema);
