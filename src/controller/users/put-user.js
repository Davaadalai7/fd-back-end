import fs from 'fs';

export const putUser = (req, res) => {


    const rawUserData = fs.readFileSync("src/db/users.json");
    const users = JSON.parse(rawUserData)
    users[0].userId = "aaa"
    fs.writeFileSync("src/db/users.json", JSON.stringify(users))
  //   res.send(JSON.parse(rawUserData));

  // use.push({
  //   firstName: "Munkh",
  //   secondName: "Bat",
  //   userId: "3",
  //   password: "1000-7",
  // });
  // res.send(users);
};
