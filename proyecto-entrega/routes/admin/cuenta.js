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

router.get('/agregar', async (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',
  })
})

router.post('/agregar', async (req, res, next) => {
  try {
      if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
          await cuentaModel.insertCuenta(req.body);
          res.redirect('/admin/cuenta')
      } else {
          res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'Todos los campos son requeridos'
        })
      }
  } catch (error) {
      console.log(error)
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se cargo el nuevo objeto'
    })
  }
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var cuenta = await cuentaModel.getCuentaById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    cuenta
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      precio: req.body.precio
    }

    await cuentaModel.modificarCuentaById(obj, req.body.id);
    res.redirect('/admin/cuenta');
  } catch (error) {
    res.render('/admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la cuenta'
    })
  }
})

module.exports = router;
