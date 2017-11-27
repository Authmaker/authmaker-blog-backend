const autorouteJson = require('express-autoroute-json');
const authmakerCommon = require('@authmaker/common');

module.exports.autoroute = autorouteJson({
  model: authmakerCommon.models.user,
  resource: 'user',

  attributes: ['email', 'username'], // only use these two attributes when sending response

  find: {},
  // only allow for viewing of user data, no other routes included besides 'find'
});
