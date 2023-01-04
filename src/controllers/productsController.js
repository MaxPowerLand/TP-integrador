const Product = require('../data/models/Product');
const path = require('path');
const fs = require('fs');

let controller = {
    product: async function (req, res) {
        const product = await Product.findById(req.params.id);
        res.render('products/product', { producto: product });
    },
    detail: async (req, res) => {
        // obtenemos el id del producto
        const product = await Product.findById(req.params.id);
        res.render('products/detail', { producto: product });
    },
    create: (req, res) => {
        res.render('products/create');//devuelve una vista
    },
    edit: async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product.count <= 0) {
            return res.render('notfound');
        }
        res.render('products/edit', { producto: product });
    },
    store: async (req, res) => {
        if (!req.file) {
            return res.send("La imagen solo acepta formato .jpg, .png o .gif");
        }
        await Product.create({ ...req.body, image: req.file.filename })

        return res.redirect("/");
    },
    fileext: (req, res) => {
        res.render('products/fileext', { producto: product });
    },
    update: async (req, res) => {
        const prod = await Product.findById(req.params.id);
        const tempFolder = path.join('public/images/products/temp/', prod.image);
        const imagePath = path.join('public/images/products/', prod.image);

        if (!req.file) {
            const aFile = fs.copyFile(imagePath, tempFolder, (err) => {
                if (err) {
                    console.log("error Found", err);
                }
            });
            await Product.findByIdAndUpdate({ _id: req.params.id },
                {
                    _id: req.params.id,
                    name: req.body.name,
                    brand: req.body.brand,
                    price: req.body.price
                },
                { image: aFile },
            );
        } else {
            await Product.findByIdAndUpdate({ _id: req.params.id },
                {
                    _id: req.params.id,
                    name: req.body.name,
                    brand: req.body.brand,
                    price: req.body.price,
                    image: req.file.filename,
                },
            )
        }
        return res.redirect('/');
    },
        delete: async (req, res) => {
            await Product.findOneAndRemove({_id: req.params.id});
            return res.redirect('/');
        },
};
module.exports = controller;