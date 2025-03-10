import express from "express";
import { createUser } from "../controller/users/create-user.js";
import { User } from "../models/users-model.js";

export const authenticationRouter = express.Router();

const validateEmailAndPassword = (req, res, next) => {
  const { email, password } = req;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "email and password required" });
  } else {
    next();
  }
};

const validateUserEmail = (req, res, next) => {
  const { email } = req;
  try {
    const user = User.find({ email: email });
    if (user) {
      res.status(400).json({ success: false, error: "Already created" });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ success: false, error: `internal error: ${err}` });
  }
};

userRouter.post("/", validateEmailAndPassword, validateUserEmail, createUser);
