const router = require("express").Router();
const controller = require("./user.controller");
const middleware = require("../../middlewares/jwt.middleware");

router.post("/signin", controller.signin);
router.post("/signup", controller.signup);
router.get("/me", middleware.tokenVerification, controller.me);


module.exports = router;