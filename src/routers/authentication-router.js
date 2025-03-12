import express from "express";
import { createUser } from "../controller/users/create-user.js";
import { User } from "../models/users-model.js";
import { validateEmailAndPassword } from "../middleware/validate-email-and-password.js";
import { validateUserEmail } from "../middleware/validate-user-email.js";
import { loginUser } from "../controller/authentication/login-user.js";

export const authenticationRouter = express.Router();

authenticationRouter.post("/login", validateEmailAndPassword, loginUser);
authenticationRouter.post(
  "/sign-up",
  validateEmailAndPassword,
  validateUserEmail,
  createUser
);
// login

// email password
