const router = require("express").Router();
const controller = require("./member.controller");

router.post("/", controller.createMember);
router.delete("/", controller.deleteMember);

module.exports = router;