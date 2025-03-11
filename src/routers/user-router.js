import express from "express";
// import { getUsers } from "../controller/users/get-user.js";
// import { deleteUser } from "../controller/users/delete-user.js";
// import { putUser } from "../controller/users/put-user.js";
import { createUser } from "../controller/users/create-user.js";
import { loginUser } from "../controller/authentication/login-user.js";
// import { loginUser } from "../controller/users/login/login.js";

export const userRouter = express.Router();

userRouter.delete("", loginUser);
userRouter.put("", loginUser);

// userRouter.get("/", getUsers);

// userRouter.put("/", putUser);

// userRouter.delete("/", deleteUser);

// userRouter.post("/login", loginUser);
