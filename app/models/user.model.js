
  
const mongoose = require("mongoose");
const User = mongoose.model(
    "User",
    new mongoose.Schema({
      fullname: String,
      email: String,
      password: String,
      birthdate: Date,
      last_login: Date,
      is_admin: Boolean
    })
  );
  
  module.exports = User;