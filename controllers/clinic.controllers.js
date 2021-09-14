'use strict';
const { responseOk } = require('../utils/responseOk');
const { normalizeResponse } = require('../utils/normalizeResponse');
const { searchAll } = require('../utils/clinic.finder');

/**
 * @description clinic controller
 * @memberof clinicController
 * @param req
 * @param res
 * @returns {json} json
 */
exports.clinicController = async (req, res) => {
  // const { name, stateName, availability, clinicName, stateCode, opening } =
  //   req.body;
console.log(req.query);
  const { name, stateName, availability, clinicName, stateCode, opening } =
    req.query;

  searchAll({
    name,
    stateName,
    availability,
    clinicName,
    stateCode,
    opening,
    resolve: async (results) => {
      responseOk(res, results);
    },
    reject: (error) => {
      console.trace(error);
      res.status(404).json(
        normalizeResponse(null, {
          message: `cannot find requested ${name || clinicName}.`,
        }),
      );
    },
  });
};
