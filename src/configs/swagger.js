const { version } = require("../../package.json");

const swaggerConfig = {
  openapi: "3.0.0",
  info: {
    title: "Projecta API documentation",
    version,
  },
  servers: [
    {
      url: `http://localhost:${process.env.APP_PORT}/api`,
    },
  ],
};

module.exports = swaggerConfig;
