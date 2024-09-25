const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // O campo é obrigatório
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // outros campos, se houver
});

const User = mongoose.model('User', userSchema);
module.exports = User;
