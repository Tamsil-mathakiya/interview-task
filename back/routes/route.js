const express = require('express');
const Router = express.Router();
const logincontrol = require('../controller/login_control');
const registercontrol = require('../controller/register_control')
Router.post('/login', logincontrol.loginuser);
Router.post('/register', registercontrol.registerUser);

module.exports = Router;
