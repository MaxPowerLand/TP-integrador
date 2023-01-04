const express = require('express');
const app = express();
const path = require('path');
const dbConnect = require('./config/database');


/* Configuración express */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname,'../public')));

/* Configuración para poder leer lo que viene por post */
app.use(express.urlencoded({ extended: true }))

/* routes */
const main = require('./routes/main');
app.use('/', main);
const products = require('./routes/products');
app.use('/products', products);                         //la ruta va bajo el seudonimo de products


/* 404 not found */
app.use((req, res, next) => {
    res.render('404-page');
});

dbConnect();
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));