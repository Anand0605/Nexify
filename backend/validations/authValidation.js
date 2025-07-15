// validations/authValidation.js
const yup = require('yup');

exports.registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

exports.loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
