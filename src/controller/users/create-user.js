import { Users } from "../../models/users-model.js";

export const createUser = async (req, res) => {
  try {
    const userData = await Users.create({
      name: "AAAA", 
    });
    res.status(200).send(userData); 
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ error: "Failed to create user" });
  }
};
