const otpStore = new Map(); // temporary store (use Redis in production)

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

function saveOTP(mobile, otp) {
  otpStore.set(mobile, { otp, expiresAt: Date.now() + 5 * 60 * 1000 }); // 5 min expiry
}

function verifyOTP(mobile, otp) {
  const data = otpStore.get(mobile);
  if (!data) return false;
  if (Date.now() > data.expiresAt) return false;
  return data.otp === otp;
}

module.exports = { generateOTP, saveOTP, verifyOTP };
