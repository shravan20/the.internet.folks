const router = require("express").Router();
const controller = require("./community.controller");
const middleware = require("../../middlewares/jwt.middleware");

router.get("/", middleware.tokenVerification, controller.getAllCommunity);
router.get("/:id/members", middleware.tokenVerification, controller.getAllMembersByCommunity);
router.get("/me/owner", middleware.tokenVerification, controller.getMyOwnedCommunity);
router.get("/me/member", middleware.tokenVerification, controller.getMyJoinedCommunity);
router.post("/", middleware.tokenVerification, controller.createCommunity);



module.exports = router;
