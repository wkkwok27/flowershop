const express = require('express');
const router = express.Router();

const Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
    const successMgs = req.flash('success')[0];
    Product.find(function(err, docs){
        const productChunks = [];
        const chunkSize = 3;
        for (let i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/index', { title: 'Flower Shop', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
    }).lean();
});

/*
 * API
 */

router.get("/api/products", (req, res, next) => Product.find((err, products) => res.send({products: products})).lean())

router.post("/api/products", function(req, res, next) {
  new Product({
    imagePath: req.body.imagePath,
    title: req.body.title,
    description: req.body.description,
    price: parseInt(req.body.price)
  }).save(function(err, result) {
    res.send(result)
  })
})


module.exports = router;
