const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.EXPRESS_APP_JWT_SECRET;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type : String,
    required : true,
    unique:true
  },
  profilePic: {
    type: String,
    default: "",
  },
  password:{
    type:String,
    required:true
  },
  bio:{
    type:String,
    default:""
  },
  dateJoined:{
    type:Date,
    default:Date.now
  },
  verified:{
    type:Boolean,
    default:false
  },
  lastLogin:{
    type:Date,
    default:Date.now
  }
});

userSchema.methods.generateAuthToken = function () {
  const data = {
    user: {
      id: this.id,
    },
  };
  const token = jwt.sign(data, JWT_SECRET);
  return token;
};

module.exports = mongoose.model("user", userSchema);
