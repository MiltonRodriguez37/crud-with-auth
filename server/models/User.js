const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('User', UserSchema)