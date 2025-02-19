import fs from "fs";

export const deleteUser = (req, res) => {
  const { userId } = req.body;

  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);

  if (!userId) {
    return res.status(400).send("userId is required");
  }

  const user = users.find((user) => user.userId === userId);

  if (user) {
    const updatedUser = users.filter((user) => user.userId !== userId);

    fs.writeFileSync("src/db/users.json", JSON.stringify(updatedUser));

    res.send(`User with userId ${userId} deleted`);
  } else {
    res.status(404).send(`User with userId ${userId} not found`);
  }
};
