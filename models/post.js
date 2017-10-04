const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  body: String,
});

module.exports = schema;
module.exports.modelName = 'Post';
