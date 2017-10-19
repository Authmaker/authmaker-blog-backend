const autorouteJson = require('express-autoroute-json');
const authmakerVerifyExpress = require('authmaker-verify-express');
const models = require('../../../models').models;

module.exports.autoroute = autorouteJson({
  model: models.post,
  resource: 'post', // this will be pluralised in the routes

  // default CRUD
  find: {},  // no authentication/authorization needed to view all posts
  create: {
    preMiddleware(req, res, next) {
      // eslint-ignore-next-line no-param-reassign
      req.body.data.attributes.author = req.user.id;
      // assign the current user as the new post's author
      next();
    },
    authentication: authmakerVerifyExpress.mongo(),
    // user must be authenticated to create a new post
  },
  update: {
    authentication: authmakerVerifyExpress.mongo(), // user must be authenticated to edit a post
    authorisation(req) {
      return {
        author: req.user.id,
      };
    }, // user is only authorized to edit their own posts
  },
  delete: {
    authentication: authmakerVerifyExpress.mongo(), // user must be authenticated to delete a post
    authorisation(req) {
      return {
        author: req.user.id,
      };
    }, // user is only authorized to delete their own posts
  },
});
