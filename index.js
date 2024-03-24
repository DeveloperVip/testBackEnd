const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());
const dotenv = require("dotenv");

const { User } = require("./models/user.model");
const { Profile } = require("./models/profile.model");

//connect to database
mongoose
  .connect(
    "mongodb+srv://h1403lovea0711:14032003@cluster0.jqrbnu2.mongodb.net/"
  )
  .then(() => {
    console.log("mongodb is connect");
  })
  .catch((error) => {
    console.log("error:", error);
  });
//userRouter and profileRouter
const userRouter = require("./controllers/user.controller");
app.use('/user', userRouter);
const profileRouter = require("./controllers/profile.controller");
app.use('/profile', profileRouter);
const tokenRouter = require("./controllers/token.controller");
app.use('/verify',tokenRouter);
//dotenv
dotenv.config();
console.log(process.env.KEY);
//mapping user + profile
//authorization
app.listen(port, () => {
  console.log("connect to server");
});
