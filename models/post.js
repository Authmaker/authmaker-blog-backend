const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = schema;
module.exports.modelName = 'Post';
