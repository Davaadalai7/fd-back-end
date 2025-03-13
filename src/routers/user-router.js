import express from "express";

import { createUser } from "../controller/users/create-user.js";
import { updateUserById } from "../controller/users/update-user-by-id.js";
import { deleteUser } from "../controller/users/delete-user.js";
import { getUserById } from "../controller/users/get-user-by-id.js";
import { validateUserId } from "../middleware/validate-user-id.js";

export const userRouter = express.Router();

userRouter.get("/", validateUserId, getUserById);
userRouter.post("/", createUser);
userRouter.delete("/", validateUserId, deleteUser);
userRouter.put("/", validateUserId, updateUserById);

// userRouter.get("/", getUsers);

// userRouter.put("/", putUser);

// userRouter.delete("/", deleteUser);

// userRouter.post("/login", loginUser);
