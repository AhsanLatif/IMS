

const mongoose = require("mongoose");
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        birthdate: Date,
        last_login: Date,
        is_admin: Boolean
    })
);

module.exports = User;