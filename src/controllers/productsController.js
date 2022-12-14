const path = require('path');
const fs = require('fs');

const pathJson = path.resolve(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(pathJson, 'utf-8');
const products = JSON.parse(productsJson);

let controller = {
    detail: (req, res) => {
        // obtenemos el id del producto
        let product = products.find(product => {
            return product.id == req.params.id;
        });

        res.render('products/detail', { producto: product });
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: (req, res) => {
        res.render('products/edit');
    }
}

module.exports = controller;