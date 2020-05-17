const  mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const accountSchema = new Schema({
    user_username:{type:String,required:true},
    user_password:{type:String,required:true},
    user_role: {type:String,required:true},
});

const Account = mongoose.model('Account',accountSchema);

module.exports = Account;