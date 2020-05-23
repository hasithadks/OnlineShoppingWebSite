const router = require('express').Router();
let rateProduct = require('../models/rating.model');



router.route('/:id').get((req,res) => {
    console.log(req.params.id);
    let id = req.params.id;
    rateProduct.find({productID:id}, function (err, List) {
        res.json(List);
    })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route("/add").post((req, res) => {

    let {productID : productID,
        userID : userID,
        rating : rating,
        comments : comments,
        userName : userName,
        item_size : item_size,
        item_color : item_color} = req.body;

console.log(req.body);
    let all = new rateProduct({productID , userID , rating, comments, userName, item_size, item_color});

    all.save()
        .then(() => res.json('Rating success!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
