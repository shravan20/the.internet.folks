const router = require("express").Router();
const controller = require("./community.controller");


router.get("/", controller.getAll);
router.get("/:id/members", controller.getAllMembers);
router.get("/me/owner", controller.getMyOwnedCommunity);
router.get("/me/member", controller.getMyJoinedCommunity);
router.post("/", controller.create);



module.exports = router;
