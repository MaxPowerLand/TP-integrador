const path = require('path');
const fs = require('fs');

const pathJson = path.resolve(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(pathJson, 'utf-8');
const products = JSON.parse(productsJson);

module.exports = {
    home: function (req, res) {
        res.render('home', { productos: products })
    }   
}