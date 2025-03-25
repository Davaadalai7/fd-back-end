import express from "express";

import { createUser } from "../controller/users/create-user.js";
import { updateUserById } from "../controller/users/update-user-by-id.js";
import { deleteUser } from "../controller/users/delete-user.js";
import { getUserById } from "../controller/users/get-user-by-id.js";
import { validateUserId } from "../middleware/validate-user-id.js";
import { getAllUsers } from "../middleware/login/getAllUsers.js";
import { loginUser } from "../controller/authentication/login-user.js";
import { validateUserEmail } from "../middleware/validate-user-email.js";

export const userRouter = express.Router();

userRouter.get("/", validateUserId, getUserById);
userRouter.post("/", validateUserEmail, createUser);
userRouter.delete("/", validateUserId, deleteUser);
userRouter.put("/", validateUserId, updateUserById);
userRouter.post("/login", loginUser);
userRouter.get("/getAll", getAllUsers);
