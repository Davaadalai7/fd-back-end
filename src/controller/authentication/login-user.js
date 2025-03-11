import { User } from "../../models/users-model.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    console.log(user.email, user.password);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);

      console.log(isMatch);
      if (isMatch) {
        res.status(200).json({ success: true, message: "Login successful" });
      } else {
        res.status(400).json({ success: false, error: "Wrong password" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: `Error occurred: ${error.message}` });
  }
};
