import fs from 'fs';

export const loginUser = (req, res) => {
  const { userId, password } = req.body;

  if (!userId || !password) {
    return res.status(400).send("Both userId and password are required.");
  }

  const rawUserData = fs.readFileSync('src/db/users.json');
  const users = JSON.parse(rawUserData);

  const user = users.find((user) => user.userId === userId);

  if (user && user.password === password) {
    return res.status(200).send(`Welcome ${userId}!`);
  }

  return res.status(404).send(`User with userId ${userId} not found or incorrect password.`);
};
