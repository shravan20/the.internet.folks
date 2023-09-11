const validator = require("../utils/field.validator");

/**
 * Middleware to Validate ObjectID
 * */
const validateObjectId = (req, res, next, message) => {
  // TODO: Make this as part of error handling middleware next(err)
  if (!validator.isValidObjectId(req.params.id)) {
    return res.status(400).json({ success: false, message: message });
  }
  next();
};

module.exports = {
  validateObjectId,
};
