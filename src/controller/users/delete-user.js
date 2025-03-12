import { User } from "../../models/users-model.js";

export const deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    await User.deleteOne({ email: email });

    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error occurred", error);
    res.status(400).send({ error: `Failed to delete user: ${error.message}` });
  }
};
