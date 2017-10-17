const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = schema;
module.exports.modelName = 'Post';
