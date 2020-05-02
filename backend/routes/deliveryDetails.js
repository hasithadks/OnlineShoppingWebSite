const router = require('express').Router();
let deliveryDetail = require('../models/deliveryDetails.model');

router.route('/').get((req, res)=>{
    deliveryDetail.find()
        .then(detils => res.json(detils))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {

    let {userId : userId,
        fullName : fullName,
        phoneNo : phoneNo,
        province : province,
        district : district,
        city : city,
        address : address
    } = req.body;

    let allDetails = new deliveryDetail({userId, fullName, phoneNo, province, district, city, address});

    allDetails.save()
        .then(() => res.json('Add deliveryDetails'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
