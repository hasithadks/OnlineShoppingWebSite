const  mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const accountSchema = new Schema({
    user_username:{type:String},
    user_password:{type:String},
    user_role: {type:String},
});

const Account = mongoose.model('Account',accountSchema);

module.exports = Account;