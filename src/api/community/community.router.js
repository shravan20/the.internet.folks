const router = require("express").Router();
const controller = require("./community.controller");
const middleware = require("../../middlewares/jwt.middleware");

router.get("/", middleware.tokenVerification, controller.getAllCommunity);
router.get("/:id/members", middleware.tokenVerification, controller.getAllMembersByCommunity);
router.get("/me/owner", controller.getMyOwnedCommunity);
router.get("/me/member", controller.getMyJoinedCommunity);
router.post("/", controller.createCommunity);



module.exports = router;
