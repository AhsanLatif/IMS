const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    console.log("testing");
    console.log(req.body);
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered successfully!" });

  });
};

exports.signin = async (req, res) => {
    console.log(req.body);
  let user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );

    if (!passwordIsValid) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
        });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
     expiresIn: 86400 
    });

    res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token,
        is_admin: user.is_admin
    });
};

exports.all = async (req,res) => {
    const users = await User.find();
    console.log(users);
    res.status(200).send({
        users
    });
};