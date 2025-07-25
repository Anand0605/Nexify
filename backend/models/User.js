const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String },
  name: { type: String },
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  // avatar: { type: String },
  role: { type: String, default: 'user' },
  mobile: { type: String, unique: true, sparse: true },
  otp: { type: String },           // store OTP
  otpExpiresAt: { type: Date },    // expiry time
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
