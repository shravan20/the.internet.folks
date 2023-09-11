class CustomError extends Error {
  constructor(message, statusCode) {
    // super(message);
    if (Array.isArray(message)) {
      super(message.join('\n')); 
      this.message = message;
    } else {
      super(message);
      this.message = [message];
    }
    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message || "Not Found", 404);
  }
}

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message || "Unauthorized", 401);
  }
}

class DataAlreadyExists extends CustomError {
  constructor(message) {
    super(message || "Data Already Exists", 409);
  }
}

class BadRequestError extends CustomError {
  constructor(message) {
    super(message || "BadRequest", 400);
  }
}

// You can add more custom error classes here

module.exports = {
  DataAlreadyExists,
  NotFoundError,
  UnauthorizedError,
  BadRequestError
};
