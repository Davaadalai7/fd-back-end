import { User } from "../../models/users-model.js";

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { categoryName },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res
      .status(200)
      .send({ message: "User updated successfully", data: updatedUser });
    console.log("User updated successfully");
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).send({ error: "Failed to update user" });
  }
};
