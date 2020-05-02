const router = require('express').Router();
let productFavo = require('../models/favouriteProduct.model');

router.route('/').get((req, res) => {
    productFavo.find()
        .then(favo => res.json(favo))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    let id = req.params.id;
   // console.log("Product ID" +id);
    productFavo.find({productID: id}, function (err, products) {
       // res.json(products);
    })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {

    let {productId : productID, userID : userID, isLike : isLiked} = req.body;

    let all = new productFavo({productID , userID , isLiked});

    all.save()
        .then(() => res.json('Add to Favourite List'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/delete/:id").delete((req, res) => {
    let id = req.params.id;
    console.log("Product ID" +id);
    productFavo.findByIdAndDelete({_id : id})
        .then(() => res.json('Remove form Favourite List'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;