const router = require('express').Router();
const ManagementStaff = require('../models/managementstaff.model');

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
