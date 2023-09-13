require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectToDatabase = require("./src/configs/database");
connectToDatabase();

const middlewares = require("./src/middlewares/response.middleware");
const docsRouter = require("./src/docs/docs");
const roleRouter = require("./src/api/role/role.router");
const userRouter = require("./src/api/user/user.router");
const communityRouter = require("./src/api/community/community.router");
const memberRouter = require("./src/api/member/member.router");

app.use(express.json());
app.use(middlewares.globalResponseHandler);
app.use(middlewares.globalErrorHandler);

app.use("/docs", docsRouter);
app.use("/v1/role", roleRouter);
app.use("/v1/auth", userRouter);
app.use("/v1/community", communityRouter);
app.use("/v1/member", memberRouter);

app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
