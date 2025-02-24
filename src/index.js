import express from "express";
import { userRouter } from "./routers/user-router.js";
import mongoose from "mongoose";
import { Users } from "./models/users-model.js";

// schema ==> model
// collection ==> table
// cluster dotor ==> database ==> collection

// we have some DataBase on MongoDB ==> url ==> connect ==>

const url =
  "mongodb+srv://skiple7:d3pYgGUYwP0eM5Mu@cluster0.purvf.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error occured", error);
  }
};

connectDb();

const app = express();
const port = 3000;

app.use(express.json());

// get ==> read
// post ==> create

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
