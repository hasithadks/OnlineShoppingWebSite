const quantityRouter = require('express').Router();
let Quantity = require('../models/quantity.model');
const mongoose = require('mongoose');

quantityRouter.route('/').get(function(req, res) {
    Quantity.find(function(err, quantity) {
        if (err) {
            console.log(err);
        } else {
            res.json(quantity);
        }
    });
});

quantityRouter.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Quantity.find({"item_id" : id} , function (err, quantity) {
        res.json(quantity);
    });
});

quantityRouter.route('/qty/:id').get(function (req, res) {
    let id = req.params.id;
    Quantity.findById(id , function (err, quantity) {
        res.json(quantity);
    });
});

quantityRouter.route('/add').post(function(req, res) {
    let quantity = new Quantity(req.body);
    quantity.save()
        .then(quantity => {
            res.status(200).json({'item': 'item added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new item failed');
        });
});

quantityRouter.route('/update/:id').post((req, res) => {
    Quantity.findById(req.params.id,function(err, quantity){
        if(!quantity)
            req.status(404).send("data is not found");
        else
            quantity.item_size = req.body.item_size;
            quantity.item_colour =req.body.item_colour;
            quantity.item_price = req.body.item_price;
            quantity.item_quantity = req.body.item_quantity;


        quantity.save().then(quantity =>{
            res.json('Item update!');
        })
            .catch(err =>{
                res.status(400).send("Update not possible");
            });
    });
});

quantityRouter.route('/delete/:id').delete((req, res) => {
    Quantity.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

quantityRouter.route('/delete/qty/:id').delete((req, res) => {
    Quantity.remove({"item_id" : req.params.id})
        .then(() => res.json('Product Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = quantityRouter;
