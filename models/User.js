const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
    match: [/^.+@[^\.].*\.[a-z]{2,}$/, "Please add a valid email"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  passwords: {
    type: String,
    required: [true, "Please add a password"],
    minLength: 6,
    select: false
  }
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
