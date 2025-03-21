import { User } from "../../models/users-model.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, error: `Internal error: ${err.message}` });
  }
};
