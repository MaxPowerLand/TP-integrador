const path = require('path');
const multer = require("multer");  //requiero la libreria de multer

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products');
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    const randomName = Date.now() + '-' + fileExtension;   //date.now timestamp, te da un numero en milisegundos, la marca en el tiempo
    cb(null, randomName);
  },
});

const upload = multer({
  storage: multerStorage, //ejecuto la funcion q me da la libreria definiendo a traves de un objeto las opciones donde quiero subir la imagen
  fileFilter: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);

    if (!['.jpg', '.png', '.gif'].includes(fileExtension)) { //si esta extension no esta aqui, cb false
      return cb(null, false);
    }
    cb(null, true);
  },
});

module.exports = upload;