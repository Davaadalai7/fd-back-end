export const validateUserEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ success: false, error: "Already created" });
    } else {
      next();
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, error: `Internal error: ${err.message}` });
  }
};
