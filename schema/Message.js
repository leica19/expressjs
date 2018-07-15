
var mongoose = require('mongoose');

var Message = mongoose.Schema({
  username: String,
  message:  String,
  dage: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Message', Message)
