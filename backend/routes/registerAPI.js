//ท็อป
const express = require('express');
const {register,login} = require('.././api/registerAPI');
const routes = express.Router();

routes.post('/register', register)
routes.post('/login', login)

module.exports = routes;