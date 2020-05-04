const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    item_id: mongoose.Schema.Types.ObjectId,

    item_name:{
        type:String
    },
    item_description:{
        type:String
    },
    item_category:{
        type:String
    },
    item_discount:{
        type: Number
    },
    item_from:{
        type: String
    },
    item_brand:{
        type: String
    },
    item_image:{
        type: String
    }
});

module.exports = mongoose.model('Product',Product);
