const HTTP_STATUS = require("../utils/httpStatus");

// Validate Query Parameters
const validateQuery = (allowedParams) => (req, res, next) => {
  const queryKeys = Object.keys(req.query);
  const invalidParams = queryKeys.filter((key) => !allowedParams.includes(key));

  if (invalidParams.length) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      success: false,
      message: `Invalid query parameters: ${invalidParams.join(", ")}`,
    });
  }

  next();
};

module.exports = validateQuery;
