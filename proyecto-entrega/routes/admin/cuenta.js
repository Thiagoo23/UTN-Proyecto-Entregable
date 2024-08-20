var express = require('express');
var router = express.Router();
var cuentaModel = require('../../models/cuentaModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = require

/* GET home page. */
router.get('/', async function(req, res, next) {
  var cuenta = await cuentaModel.getCuenta();

  cuenta = cuenta.splice(0, 5);
  cuenta = cuenta.map(cuenta => {
    if(cuenta.img_id) {
      const imagen = cloudinary.image(cuenta.img_id, {
        width: 460,
        crop: "fill"
      });
      return {
        ...cuenta,
        imagen
      }
    } else {
      return {
        ...cuenta,
        imagen: ''
      }
    }
  })

  res.render('admin/cuenta', {
      layout:'admin/layout',
      usuario: req.session.nombre,
      cuenta
      });
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let cuenta = await cuentaModel.getCuentaById(id);
  if (cuenta.img_id) {
    await (destroy(novedad.img_id));
  }

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

      var img_id = '';
      if(req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
      }

      if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
          await cuentaModel.insertCuenta({
            ...req.body,
            img_id
          });

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

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if(req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

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
