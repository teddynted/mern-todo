'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const toDoSchema = new Schema({
  task: { type: String, required: true },
  status: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('toDo', toDoSchema);