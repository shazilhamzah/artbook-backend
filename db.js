const mongoose = require("mongoose");
require("dotenv").config();
const mongooseURI = process.env.EXPRESS_APP_MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongooseURI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
