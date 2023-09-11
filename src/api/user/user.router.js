const router = require("express").Router();
const controller = require("./user.controller");

router.post("/signin", controller.signin);
router.post("/signup", controller.signup);
// router.post("/", controller.me);


module.exports = router;