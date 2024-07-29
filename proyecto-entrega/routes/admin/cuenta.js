var express = require('express');
var router = express.Router();
var cuentaModel = require('../../models/cuentaModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var cuenta = await cuentaModel.getCuenta();
  res.render('admin/cuenta', {
      layout:'admin/layout',
      usuario: req.session.nombre,
      cuenta
      });
});

router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await cuentaModel.deleteCuentaById(id);
  res.redirect('/admin/cuenta')
})

module.exports = router;
