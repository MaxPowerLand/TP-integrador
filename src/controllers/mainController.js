const Product = require('../data/models/Product');

module.exports = {
    home: async function (req, res) {
        const products = await Product.find();
        res.render('home', { productos: products });
    }   
};