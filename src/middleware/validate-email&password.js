export const validateEmailAndPassword = (req, res, next) => {
    const { email, password } = req.body; 
    
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "email and password required" });
    } else {
      next();
    }
  };
  