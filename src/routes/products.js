const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

//Middlewares
const uploadFile = require("../middlewares/uploadFile");

//Controllers
router.get('/product/:id', controller.product);
router.get('/detail/:id', controller.detail);
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', uploadFile.single("image"), controller.update);
router.get('/create', controller.create);   //se ejecuta el controlador create en productscontroller
router.post('/create', uploadFile.single("image"), controller.store);
router.get('/fileext', controller.fileext);
router.post('/delete/:id', controller.delete);
module.exports = router;