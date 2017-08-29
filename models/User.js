const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  appid: String,
  apptype: String,
  appdisplayName: String,
  appemails: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userSchema);
