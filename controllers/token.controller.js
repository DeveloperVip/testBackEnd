const { User } = require("../models/user.model");
const {Profile} = require("../models/profile.model")
const express = require("express");
const jwt = require("jsonwebtoken");
const tokenRouter = express.Router()
tokenRouter.get("/user/:id", async (req, res) => {
  console.log("reqId: ",req.params.id);
    const user = await User.findById(req.params.id)
      .populate({
        path: "User",
        select: {
          fullName: 1,
          dateOfBirth: 1,
          placeOfBirth: 1,
          country: 1,
          personalSkills: 1,
          interests: 1,
          personalGoals: 1,
        },
      })
      .lean();
    res.json(user);
  });
  
  //create api login
tokenRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const userSelect = {
      email,
      password,
    };
    const user = await User.findOne(userSelect).exec();
    if (user) {
      const payLoad = {
        email: user.email,
        fullName: user.fullName,
        dateOfBirth: user.dateOfBirth,
        placeOfBirth: user.placeOfBirth,
        country: user.country,
      };
      const token = jwt.sign(payLoad, "hunghoang", { expiredIn: "1d" });
      res.send(token);
    } else {
      return req.status(401).json({ message: "invalid" });
    }
  });

module.exports= tokenRouter;