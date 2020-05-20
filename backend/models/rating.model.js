const  mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const rateProductSchema = new Schema({
    productID: {type: String},
    userID : {type:String},
    rating : {type: Number},
    comments: {type: String},

},{
    timestamps:true
});

const rateProduct = mongoose.model('rateProduct', rateProductSchema);

module.exports = rateProduct;
