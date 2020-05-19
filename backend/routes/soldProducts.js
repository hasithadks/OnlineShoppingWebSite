const router = require('express').Router();
let soldProduct = require('../models/soldProducts.model');
const nodemailer = require('nodemailer');
const cred = require('../email-config/config');

var transport = {
    host : 'smtp.gmail.com',
    auth : {
        user : cred.USER,
        pass : cred.PASS
    }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages of Order Department');
    }
});


// router.route('/:id').get((req,res) => {
//     let id = req.params.id;
//     soldProduct.find({userID:id}, function (err, cartList) {
//
//     }).then(cartList => res.json(cartList))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

router.route("/add").post((req, res) => {

    let {productID : productID,
        userID : userID,
        item_price : item_price,
        item_discount : item_discount,
        discounted_price : discounted_price,
        item_size : item_size,
        item_color : item_color,
        requested_qty : requested_qty} = req.body;


    let all = new soldProduct({productID , userID , item_price, item_discount, discounted_price, item_size, item_color, requested_qty});

    all.save()
        .then((data) => {
           console.log( data._id);

            //
            // const content = `
            //             Hi, \n
            //             Your order has placed  successfully. \n\n
            //             Your order will receive within 3 Days. Are there any issues contact us email : onlineshoppingwebsite18@gmail.com
            //             Order reference No : ${data._id}. \n
            //
            //             Thanks, \n
            //             Online Fashion Store Team.
            //         `;


        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;