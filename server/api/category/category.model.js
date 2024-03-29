'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  info: String,
  imageUrl: String,
  active: Boolean
});

module.exports = mongoose.model('Category', CategorySchema);