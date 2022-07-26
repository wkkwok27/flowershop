const express = require('express');
const router = express.Router();

const Order = require('../models/order');
const Cart = require('../models/cart');

router.get('/checkout', isLoggedIn, function (req, res, next) {
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    const cart = new Cart(req.session.cart);
    const errMsg = req.flash('error')[0];
    return res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    const cart = new Cart(req.session.cart);

    const order = new Order({
        user: req.user,
        cart: cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: '123'
    });
    order.save(function(err, result) {
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/');
    });
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
};

module.exports = router;
