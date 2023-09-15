const router = require("express").Router();
const controller = require("./member.controller");
const { tokenVerification } = require("../../middlewares/jwt.middleware");

router.post("/", tokenVerification, controller.createMember);
router.delete("/", tokenVerification, controller.deleteMember);

module.exports = router;