const db = require("../models");
const User = db.user;

exports.checkDuplicateEmail = async (req, res, next) => {
  let user = await User.findOne({
    email: req.body.email
  })

  if (user) {
    res.status(400).send({ message: "Failed! Email is already in use!" });
    return;
  }

  next();

};