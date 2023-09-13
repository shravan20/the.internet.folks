const router = require("express").Router();
const controller = require("./community.controller");


router.get("/", controller.getAllCommunity);
router.get("/:id/members", controller.getAllMembersByCommunity);
router.get("/me/owner", controller.getMyOwnedCommunity);
router.get("/me/member", controller.getMyJoinedCommunity);
router.post("/", controller.createCommunity);



module.exports = router;
