import express from "express";
import { createUser } from "../controller/users/create-user.js";
import { User } from "../models/users-model.js";
import { validateEmailAndPassword } from "../middleware/validate-email&password.js";
import { loginUser } from "../controller/authentication/login-user.js";

export const authenticationRouter = express.Router();

authenticationRouter.post("/login", validateEmailAndPassword, loginUser);
authenticationRouter.post("/sign-up", validateEmailAndPassword, createUser);
// login

// email password
