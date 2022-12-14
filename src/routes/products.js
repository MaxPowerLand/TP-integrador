const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/detail/:id', controller.detail);
router.get('/edit/:id', controller.edit);
router.get('/create', controller.create);

module.exports = router;