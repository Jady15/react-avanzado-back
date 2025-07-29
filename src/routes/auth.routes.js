const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);    // ENDPOINT = http://localhost:8085/user/register
router.post('/login', authController.login);    // ENDPOINT = http://localhost:8085/user/login

module.exports = router;