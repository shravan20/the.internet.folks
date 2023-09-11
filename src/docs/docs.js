const router = require("express").Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("../configs/swagger");

const specifications = swaggerJsdoc({
  swaggerDefinition,
  apis: ["src/api/**/*.router.js"],
});

router.use("/", swaggerUi.serve);

router.get(
  "/",
  swaggerUi.setup(specifications, {
    explorer: true,
  })
);

module.exports = router;
