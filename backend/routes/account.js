const  router = require('express').Router();
let Account = require('../models/account.model');
const nodemailer = require('nodemailer');
const cred = require('../email-config/config');

////////////////////////////////////////////////////////////////////////////////////////
var transport = {
    host : 'smtp.gmail.com',
    auth : {
        user : cred.USER,
        pass : cred.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages of Forgot');
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////



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
    Account.find({"user_username" : req.params.email})
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req,res)=> {
    Account.findByIdAndDelete(req.params.id)
        .then(() => res.json('Account Deleted....'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/account/:email').put(function(req, res) {

    let userEmail = req.params.email;
    let userPassword = req.body.user_password;

    Account.updateMany({user_username : userEmail}, {user_password : userPassword}, function (err, res) {

    }).then(response => {
        res.json("Data update Successfully!");
    });

});

router.route('/forgot/:email').get((req, res) => {
    Account.find({"user_username" : req.params.email})
        .then(user => {

            let userEmail = req.params.email;
            let userPassword = res.user_password;

            console.log(userEmail);
            console.log(userPassword);

            const content = `
                        Hey ${userEmail},\n
                        You forgot your password.\n\n
                        username : ${userEmail} \n 
                        password : ${userPassword} \n\n
                        Please use your credentials to Login from here- http://localhost:3000/login \n
                        To Visit Online Shopping store- http://localhost:3000/home \n
                        Thanks,
                        Online Fashion Store Team.    
                    `;

            var mail = {
                from: userEmail,
                to: userEmail,
                subject: 'Admin User Credentials',
                text: content
            }

            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.json({
                        msg: 'fail'
                    })
                } else {
                    res.json({
                        msg: 'success'
                    })
                }
            });
        })





});

module.exports = router;