const router = require("express").Router();
const controller = require("./role.controller");


router.get("/", controller.getAllRoles);
router.post("/", controller.createRole);

module.exports = router;