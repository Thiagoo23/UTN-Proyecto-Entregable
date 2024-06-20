var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro');
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var socio = req.body.socio;

  console.log(req.body)

  var obj = {
    to: 'borrothiago@gmail.com',
    subject: 'Registro',
    html: nombre + " " + apellido + " se registro correctamente en tu sitio web, con los siguiente datos: " + email + ", " + telefono + ", N° de socio " + socio + "."
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

  res.render("/registro", {
    message: "Registro completado correctamente",
  });

});
module.exports = router;
