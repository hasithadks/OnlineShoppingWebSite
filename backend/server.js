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

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
});

const productRouter = require('./routes/products');
const quantityRouter = require('./routes/quantity');
const staffRouter = require('./routes/managementstaff');
const favouriteRouter = require('./routes/favouriteProduct');
const deliveryDetailsRouter = require('./routes/deliveryDetails');

app.use('/products', productRouter);
app.use('/quantity', quantityRouter);
app.use('/mstaff', staffRouter);
app.use('/favouriteProduct', favouriteRouter);
app.use('/deliveryDetails', deliveryDetailsRouter);

const userRouter = require('./routes/user');
app.use('/users',userRouter);

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});
