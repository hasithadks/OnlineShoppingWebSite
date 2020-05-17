const  router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) =>{
    const user_email = req.body.user_email;
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    const user_phone = req.body.user_phone;
    const user_gender = req.body.user_gender;
    const user_image = req.body.user_image;
    const user_b_year = req.body.user_b_year;
    const user_b_month = req.body.user_b_month;
    const user_b_day = req.body.user_b_day;

    const newUser = new User({
        user_email,
        user_username,
        user_password,
        user_phone,
        user_gender,
        user_image,
        user_b_year,
        user_b_month,
        user_b_day,
    });
    newUser.save()
        .then(() =>res.json('User Succefully Added....'))
        .catch(err =>res.status(400).json('Error: '+ err));
});

router.route('/username/:email').get((req, res) => {
    User.find({"user_email" : req.params.email})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Eroor: '+ err));
});

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err=>res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req,res)=> {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted....'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(user => {
            user.user_email = req.body.user_email;
            user.user_username = req.body.user_username;
            user.user_password = req.body.user_password;
            user.user_phone = req.body.user_phone;
            user.user_gender = req.body.user_gender;
            user.user_image = req.body.user_image;
            user.user_b_year = req.body.user_b_year;
            user.user_b_month = req.body.user_b_month;
            user.user_b_day = req.body.user_b_day;

            user.save()
                .then(() => res.json('User Updated....'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
