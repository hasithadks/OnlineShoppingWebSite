const router = require('express').Router();
let userCart = require('../models/cart.model');


router.route('/:id').get((req,res) => {
   let id = req.params.id;
   userCart.find({userID:id}, function (err, cartList) {

   }).then(cartList => res.json(cartList))
       .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {

    let {productID : productID,
        userID : userID,
        item_price : item_price,
        item_discount : item_discount,
        discounted_price : discounted_price,
        item_size : item_size,
        item_color : item_color,
        requested_qty : requested_qty} = req.body;

  //  productId, userID, productPrice, discount, discountedPrice, selectedSize, selectedColor, quantity

    let all = new userCart({productID , userID , item_price, item_discount, discounted_price, item_size, item_color, requested_qty});

    all.save()
        .then(() => res.json('Add to Favourite List'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
