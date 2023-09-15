const router = require("express").Router();
const controller = require("./role.controller");
const { tokenVerification } = require("../../middlewares/jwt.middleware");

router.get("/", tokenVerification, controller.getAllRoles);
router.post("/", tokenVerification, controller.createRole);

module.exports = router;