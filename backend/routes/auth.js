const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// 🔐 Register & Login Routes
router.post('/register', register);
router.post('/login', login);

// 🔐 Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
  session: false,
}), (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.redirect(`${process.env.CLIENT_URL}/?token=${token}`);
});

module.exports = router;
