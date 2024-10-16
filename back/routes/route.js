const express = require('express');
const Router = express.Router();
const loginControl = require('../controller/login_control');
const registerControl = require('../controller/register_control');

Router.post('/login', loginControl.loginUser);
Router.post('/register', registerControl.registerUser);

module.exports = Router;
