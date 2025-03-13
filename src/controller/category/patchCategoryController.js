import { User } from "../../models/users-model.js";

export const updateCategoryController = async (req, res) => {
  const { id, email, address } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { id },
      { email: email, address: address },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res
      .status(200)
      .send({ message: "User updated successfully", data: updatedUser });
    console.log("user updated");
  } catch (error) {
    res.status(400).send({ error: "Failed to update user" });
  }
};
