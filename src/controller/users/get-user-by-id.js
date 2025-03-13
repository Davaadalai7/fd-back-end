import { User } from "../../models/users-model.js";

export const getUserById = async (req, res) => {
  const { _id } = req.body;

  try {
    const userData = await User.findOne({ id: _id });

    if (!userData) {
      return res.status(404).json({ message: "User id not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "User found", data: userData });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: `Error occurred: ${error.message}` });
  }
};
