const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new mongoose.Schema({
  username: String,
  email: String,

});

module.exports = schema;
module.exports.modelName = 'User';