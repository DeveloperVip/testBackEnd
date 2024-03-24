const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  placeOfBirth: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  password:{
    type:Number,
    require:true,
  },
},
{
  timestamps:true
},);

const User = mongoose.model('User',userSchema);
module.exports = {User};
