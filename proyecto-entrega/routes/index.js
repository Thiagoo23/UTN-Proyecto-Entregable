var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var cuentaModel = require('../models/cuentaModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {
  var cuenta = await cuentaModel.getCuenta();
  res.render('index', { 
    cuenta
  });
});

module.exports = router;