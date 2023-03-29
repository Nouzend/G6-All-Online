//ท็อป
const express = require('express');
const {GetpFont,GetproductsByid} = require('.././api/fontAPI');
const routes = express.Router();

routes.get('/Pd/:productType',GetpFont);
routes.get('/Pd/:id',GetproductsByid);

module.exports = routes;