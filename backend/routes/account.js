const  router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req,res) =>{
    Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) =>{
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    const user_role = req.body.user_role;

    const newAccount = new Account({
        user_username,
        user_password,
        user_role
    });
    newAccount.save()
        .then(() =>res.json('Account Created....'))
        .catch(err =>res.status(400).json('Error: '+ err));
});

router.route('/username/:email').get((req, res) => {
    Account.find({"user_email" : req.params.email})
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req,res)=> {
    Account.findByIdAndDelete(req.params.id)
        .then(() => res.json('Account Deleted....'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:email').post((req,res) => {
    Account.find({"user_email":req.params.email})
        .then(account => {
            account.user_username = req.body.user_email;
            account.user_password = req.body.user_password;

            account.save()
                .then(() => res.json('Account Updated....'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;