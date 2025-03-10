// import { Users } from "../../models/users-model.js";

// export const putUser = async (req, res) => {
//   const { id } = req.body
//   try {
//     await Users.updateOne({ _id : id } , {name : "Tangina"})
//     res.status(200).send({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(400).send({ error: "Failed to delete user" });
//   }
// }