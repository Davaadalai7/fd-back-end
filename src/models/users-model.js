import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, require: true },
  password: { type: String, require: true },
});

export const Users = mongoose.model("users", usersSchema);
