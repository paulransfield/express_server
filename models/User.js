const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleid: String,
  googledisplayName: String,
  googleemails: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('users', userSchema);
