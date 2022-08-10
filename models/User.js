const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date
});


module.exports = mongoose.model('User', userSchema);