const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blood");
    console.log(`Connected to mongodb Database ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Database error ${error}`.bgRed.white);
  }
};
module.exports = connectDB;
