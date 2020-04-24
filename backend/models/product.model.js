const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    item_name:{
        type:String
    },
    item_description:{
        type:String
    },
    item_category:{
        type:String
    },
    item_quantity:{
        type: Number
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
    item_features:{
        type: String
    },
    item_image:{
        type: String
    }
});

module.exports = mongoose.model('Product',Product);
