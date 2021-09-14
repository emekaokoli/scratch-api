const { body, validationResult } = require('express-validator');
const { normalizeResponse } = require('./normalizeResponse');

/**
 * @description checks and validate,remove whitepaces[LR] from the Request Body, and also transform request body to lowercase
 * @memberof validate
 * @param null
 * @param null
 * @returns {req.body} body
 */

exports.validateReqBody = () => {
  return [
    body('name').trim().toLowerCase().isString(),
    body('stateName').trim().toLowerCase().isString(),
    body('availability').notEmpty(),
    body('clinicName').trim().toLowerCase().isString(),
    body('stateCode').trim().toLowerCase().isString(),
    body('opening').notEmpty(),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json(normalizeResponse(extractedErrors));
};
