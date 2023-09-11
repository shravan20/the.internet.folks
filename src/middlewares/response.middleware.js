// Global Response Envelope Setup
const globalResponseHandler = (request, response, next) => {
  response.success = (data) => sendSuccess(response, data);
  response.error = (error) => sendError(error, request, response, next);
  next();
};

// Fallback Middleware Error
const globalErrorHandler = (error, request, response, next) => {
  response.error(error);
};

const sendSuccess = (response, data) => {
  response.status(response.statusCode || 200).send({
    status: true,
    content: data,
  });
};

const sendError = (error, request, response, next) => {
  let status = error.statusCode || 500;
  response.status(status).send({
    statusCode: status,
    success: false,
    message: error.message || "Internal Server Error",
  });
};

module.exports = {
  globalErrorHandler,
  globalResponseHandler,
};
