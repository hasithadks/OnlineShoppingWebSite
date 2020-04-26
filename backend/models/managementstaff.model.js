const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mstaffSchema = new Schema({
    username : {type:String , required:true},
    password : {type:String , required:true},
    fname : {type:String , required:true},
    lname : {type:String , required:true},
    role : {type:String , required:true}
} , {
    timestamps:true
});

const ManagementStaff = mongoose.model('ManagementStaff', mstaffSchema);

module.exports = ManagementStaff;

