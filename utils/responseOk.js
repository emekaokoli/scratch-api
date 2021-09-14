const { normalizeResponse } = require('./normalizeResponse');

exports.responseOk = (res, data) =>
  res.status(200).json(normalizeResponse(data));
