const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quantity = new Schema({
    item_id:{
        type:String
    },
    item_size:{
        type:String
    },
    item_colour:{
        type:String
    },
    item_price:{
        type: Number
    },
    item_discount:{
        type: Number
    },
    item_quantity:{
        type: Number
    }
});

module.exports = mongoose.model('Quantity',Quantity);
