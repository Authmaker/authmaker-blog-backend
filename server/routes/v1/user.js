const autorouteJson = require('express-autoroute-json');
const authmakerVerifyExpress = require('authmaker-verify-express');
const models = require('../../../models').models;

module.exports.autoroute = autorouteJson({
  model: models.user,
  resource: 'user', // this will be pluralised in the routes

  // default CRUD
  find: {},
  create: {},
  update: {},
  delete: {},
});
