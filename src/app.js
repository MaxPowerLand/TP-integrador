const express = require('express');
const app = express();
const path = require('path');

/* Configuración express */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname,'../public')));

/* routes */
const main = require('./routes/main');
app.use('/', main);
const products = require('./routes/products');
app.use('/products', products);


/* 404 not found */
app.use((req, res, next) => {
    res.render('404-page');
})

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));