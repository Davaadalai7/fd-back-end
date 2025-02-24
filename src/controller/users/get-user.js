import { Users } from "../../models/users-model.js";

export const getUsers = async (req, res) => {
  try {
    const userData = await Users.find({});
    res.status(200).send(userData); 
  } catch (error) {
    console.log("Error occurred", error);
    res.status(400).send({ error: "Failed to retrieve users" }); 
  }
};
