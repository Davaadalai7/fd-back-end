import { User } from "../../models/users-model.js";

export const getUserById = async (req, res) => {
  const { email } = req.body;

  try {
    const userData = await User.findOne({ _id: id });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "User found", data: userData });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: `Error occurred: ${error.message}` });
  }
};
