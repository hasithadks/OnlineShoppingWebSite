const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let mstaffSchema = new Schema({
    username : {type:String , required:true},
    password : {type:String , required:true},
    fname : {type:String , required:true},
    lname : {type:String , required:true},
    role : {type:String , required:true},
    email : {type: String, trim: true, lowercase: true, required: 'Email address is required', validate: [validateEmail, 'Please fill a valid email address'], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    profilePic : {type:String, required:true}
} , {
    timestamps:true
});

const ManagementStaff = mongoose.model('ManagementStaff', mstaffSchema);

module.exports = ManagementStaff;

