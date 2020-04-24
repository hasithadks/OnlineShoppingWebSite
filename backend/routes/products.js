const productRouter = require('express').Router();
let Product = require('../models/product.model');

productRouter.route('/').get(function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

productRouter.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
});


productRouter.route('/add').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'item': 'item added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new item failed');
        });
});

productRouter.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id,function(err, product){
        if(!product)
            req.status(404).send("data is not found");
        else
            product.item_name = req.body.item_name;
            product.item_description =req.body.item_description;
            product.item_category = req.body.item_category;
            product.item_quantity = req.body.item_quantity;
            product.item_discount = req.body.item_discount;
            product.item_from = req.body.item_from;
            product.item_brand = req.body.item_brand;
            product.item_features = req.body.item_features;
            product.item_image = req.body.item_image;

            product.save().then(product =>{
                res.json('Item update!');
            })
            .catch(err =>{
                res.status(400).send("Update not possible");
            });
    });
});

productRouter.route('/delete/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = productRouter;
