export const validateUserId = async (req, res, next) => {
  const { id } = req.body;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
