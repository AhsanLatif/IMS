// const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/user.controller");
const auth = require("../middlewares/authorize");
const verifyEmail = require("../middlewares/veriyfUser")
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/signup", verifyEmail.checkDuplicateEmail, controller.signup);

    app.post("/api/signin", controller.signin);

    app.get("/api/users/all", auth.authorize, controller.all);

    app.put("/api/users/:id", auth.authorize, controller.updateUser);

    app.get("/api/signout", auth.authorize, controller.signout)
}