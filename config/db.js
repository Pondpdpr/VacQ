const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("StrictQuery", true);
  const conn = await mongoose.connect(process.env.MONGO_URL);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
