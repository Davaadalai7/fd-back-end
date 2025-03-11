import { User } from "../../models/users-model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  /// hash
  try {
    const userData = await User.create({
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({ data: userData, success: true });
    next();
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: `Failed to create user: ${error}` });
  }
};
