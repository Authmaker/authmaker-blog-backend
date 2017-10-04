const autorouteJson = require('express-autoroute-json');
const models = require('../../../models').models;

module.exports.autoroute = autorouteJson({
  model: models.post,
  resource: 'post', // this will be pluralised in the routes

  // default CRUD
  find: {},
  create: {},
  update: {},
  delete: {},
});
