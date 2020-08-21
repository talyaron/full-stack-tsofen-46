const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  image: String,
  password: String,
});

export default mongoose.model('User', UserSchema, 'Users');
