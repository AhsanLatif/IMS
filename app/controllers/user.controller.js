const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try {
        const newUser = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            is_admin: req.body.is_admin
        });

        let userSave = await newUser.save();
        res.send({ message: "User was registered successfully!" });
    }
    catch (err) {
        console.log('err' + err);
        res.status(500).send(err);
    }
};

exports.signin = async (req, res) => {
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
    var token = jwt.sign({ id: user.id, is_admin: user.is_admin }, config.secret, {
        expiresIn: 3600
    });

    res.status(200).send({
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        accessToken: token,
        is_admin: user.is_admin
    });
};

exports.all = async (req, res) => {
    if (req.is_admin) {
        const users = await User.find();
        console.log(users);
        res.status(200).send({
            users
        });
    }else{
        res.status(404).send({ message: "Not allowed to view all records!" });
    }
};

exports.updateUser = async (req, res) => {
    try {
        if (req.is_admin || req.params.id == req.userId) {
            updatedUser = {}
            if (req.is_admin) {
                updatedUser.is_admin = req.body.is_admin;
            }
            if (req.body.first_name) {
                updatedUser.first_name = req.body.first_name;
            }
            if (req.body.last_name) {
                updatedUser.last_name = req.body.last_name;
            }
            if (req.body.password) {
                updatedUser.password = bcrypt.hashSync(req.body.password, 8);
            }
            const user = await User.updateOne({ _id: req.params.id }, updatedUser)
            res.send({ message: "User was updated successfully!" });
        } else {
            res.status(404).send({ message: "You are not allowed to update the user" });
        }
    }
    catch (err) {
        console.log('err' + err);
        res.status(500).send(err);
    }
}

exports.signout = async (req, res) => {
    //blacklist tokens
}