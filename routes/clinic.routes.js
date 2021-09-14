const routes = require('express').Router();
const { clinicController } = require('../controllers/clinic.controllers');
const { validate, validateReqBody } = require('../utils/validate');

routes.get('/search', validateReqBody(), validate, clinicController);

module.exports = routes;
