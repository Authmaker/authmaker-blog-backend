const autorouteJson = require('express-autoroute-json');
const authmakerVerifyExpress = require('authmaker-verify-express');
const { models } = require('../../../models');

module.exports.autoroute = autorouteJson({
  model: models.post,
  resource: 'post', // this will be pluralised in the routes

  // no authentication/authorization needed to view all posts
  find: {},
  create: {
    // assign the current user as the new post's author
    preMiddleware(req, res, next) {
      req.body.data.attributes.author = req.user.id;
      next();
    },

    // user must be authenticated to create a new post
    authentication: authmakerVerifyExpress.mongo(),
  },

  update: {
    // user must be authenticated to edit a post
    authentication: authmakerVerifyExpress.mongo(),

    // user is only authorized to edit their own posts
    authorisation(req) {
      return {
        author: req.user.id,
      };
    },
  },

  delete: {
    // user must be authenticated to delete a post
    authentication: authmakerVerifyExpress.mongo(),

    // user is only authorized to delete their own posts
    authorisation(req) {
      return {
        author: req.user.id,
      };
    },
  },
});
