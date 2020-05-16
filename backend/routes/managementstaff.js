const router = require('express').Router();
const ManagementStaff = require('../models/managementstaff.model');
const nodemailer = require('nodemailer');
const cred = require('../email-config/config');

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
        console.log('Server is ready to take messages');
    }
});

router.route('/').get((req ,res) => {
   ManagementStaff.find()
       .then( managementstaff => res.json(managementstaff))
       .catch(err => res.status(400).json('Error :'+err));
});

router.route('/add').post((req ,res) =>{
   const username = req.body.username;
   const password = req.body.password;
   const fname = req.body.fname;
   const lname = req.body.lname;
   const role = req.body.role;

   const newManagementStaff = new ManagementStaff({
       username,
       password,
       fname,
       lname,
       role
   });

    const content = `
                        Hey ${fname} ${lname},\n
                        Your user credentials for Online Fashion Store is given below. \n
                        Please use these username and password to login to the system. \n
                        Dont share these credentials with anyone. \n\n
                        username : ${username} \n 
                        password : ${password} \n\n
                        Please use your credentials to Login from here- http://localhost:3000/admin \n
                        To Visit Online Shopping store- http://localhost:3000/ \n
                        Thanks,
                        Online Fashion Store Team.   
                    `;

    var mail = {
        from: fname,
        to: 'gihantharaka76@gmail.com',
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
    })

   newManagementStaff.save()
       .then(()=> res.json('Management Staff Added!'))
       .catch(err => res.status(400).json('Error :'+err));
});

router.route('/:id').get((req , res) =>{
    ManagementStaff.findById(req.params.id)
        .then(managementstaff => res.json(managementstaff))
        .catch(err => res.status(400).json('Error :'+err));
});

router.route('/:id').delete((req ,res) =>{
    ManagementStaff.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Management Staff Deleted!'))
        .catch(err => res.status(400).json('Error :'+err));
});

router.route('/update/:id').post((req , res) =>{
    ManagementStaff.findById(req.params.id)
        .then(managementstaff =>{
            managementstaff.username = req.body.username;
            managementstaff.password = req.body.password;
            managementstaff.fname = req.body.fname;
            managementstaff.lname = req.body.lname;
            managementstaff.role = req.body.role;

            managementstaff.save()
                .then(()=> res.json('Management Staff Updated!'))
                .catch(err => res.status(400).json('Error :'+err));
        })
        .catch(err => res.status(400).json('Error :'+err));
});

module.exports = router;
