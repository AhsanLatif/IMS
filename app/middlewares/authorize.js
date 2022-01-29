const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const redisClient = require('../config/redis.config');

exports.authorize = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  
  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }
  let oldToken =  await redisClient.get(token);
  if (oldToken) {
    return res.status(403).send({ message: "Invalid token provided" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    req.is_admin = decoded.is_admin;
    next();
  });
};
