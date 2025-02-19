import fs from 'fs';

export const createUser = (req, res) => {
  const rawUserData = fs.readFileSync('src/db/users.json');
  const users = JSON.parse(rawUserData)

  users.push(req.body);
  fs.writeFileSync('src/db/users.json', JSON.stringify(users));

  res.send("User data received");
};
