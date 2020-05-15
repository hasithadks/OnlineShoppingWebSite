const express = require('express');
const  cors = require('cors');
const  bodyParser = require('body-parser');
const mongoose =require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

try{
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false });

    const connection = mongoose.connection;
    connection.once('open',() => {
        console.log("MongoDB database connection established successfully");
    }).catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

}
catch (exception) {
    console.log("Database Connection Error : " + exception);
}


const productRouter = require('./routes/products');
const quantityRouter = require('./routes/quantity');
const staffRouter = require('./routes/managementstaff');
const favouriteRouter = require('./routes/favouriteProduct');
const deliveryDetailsRouter = require('./routes/deliveryDetails');
const productCategoryRouter = require('./routes/productcategory');
const cartRouter = require('./routes/cart');

app.use('/products', productRouter);
app.use('/quantity', quantityRouter);
app.use('/mstaff', staffRouter);
app.use('/favouriteProduct', favouriteRouter);
app.use('/deliveryDetails', deliveryDetailsRouter);
app.use('/pcategory',productCategoryRouter);
app.use('/cart',cartRouter);

const userRouter = require('./routes/user');
app.use('/users',userRouter);

const accountRouter = require('./routes/account');
app.use('/userAccounts',accountRouter);

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});
