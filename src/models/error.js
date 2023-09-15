class CustomError extends Error {
  constructor(message, statusCode) {
    if (Array.isArray(message)) {
      super(message.join('\n'));
      this.message = message;
    } else {
      super(message);
      this.message = message;
    }
    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message || "RESOURCE_NOT_FOUND", 404);
  }
}

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message || "UNAUTHORIZED", 401);
  }
}

class DataAlreadyExists extends CustomError {
  constructor(message) {
    super(message || "DATA_ALREADY_EXISTS", 409);
  }
}

class BadRequestError extends CustomError {
  constructor(message) {
    super(message || "BAD_REQUEST", 400);
  }
}

class NotAllowedAccess extends CustomError {
  constructor(message) {
    super(message || "NOT_ALLOWED_ACCESS", 400);
  }
}

// You can add more custom error classes here

module.exports = {
  DataAlreadyExists,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  NotAllowedAccess
};
