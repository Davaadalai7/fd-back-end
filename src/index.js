import express from "express";
import { userRouter } from "./routers/user-router.js";
import mongoose from "mongoose";
import { authenticationRouter } from "./routers/authentication-router.js";
import dotenv from "dotenv";
import { categoryRouter } from "./routers/category-router.js";
import foodRouter from "./routers/food-router.js";

// schema ==> model
// collection ==> table
// cluster dotor ==> database ==> collection

// we have some DataBase on MongoDB ==> url ==> connect ==>

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error occured", error);
  }
};

connectDb();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authenticationRouter);
app.use("/category", categoryRouter);
app.use("/foods", foodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
