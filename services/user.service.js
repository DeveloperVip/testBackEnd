const { User } = require("../models/user.model.js");
//create user
 async function createUser(user){
  const { email, fullName, dateOfBirth, placeOfBirth, country, password } =
    user;
  const newUser = await User.create({
    email,
    fullName,
    dateOfBirth,
    placeOfBirth,
    country,
    password,
  });
  return newUser;
};
//get all user
const getAllUser = async () => {
  const user = await User.find().lean();
  return user;
};
// update user
const updateUser = async (id, body) => {
  const { fullName, dateOfBirth, placeOfBirth, country, password } = body;
  const user = await User.findByIdAndUpdate(
    id,
    {
      fullName,
      dateOfBirth,
      placeOfBirth,
      country,
      password,
    },
    {
      new: true,
    }
  );
  return user;
};
// delete user
const deleteUser = async (id) => {
  const user = await User.findByIdAndUpdate(id);
  return user;
};

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};
