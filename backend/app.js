const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv/config');


//middleware
app.use(express.json())
app.use(morgan('tiny'));


const api = process.env.API_URL;

const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const categoriesRouter = require('./routers/categories');
const ordersRouter = require('./routers/orders');

//routers
app.use(`${api}/products`,productsRouter);
app.use(`${api}/users`,usersRouter);
app.use(`${api}/categories`,categoriesRouter);
app.use(`${api}/orders`,ordersRouter);

mongoose.set('strictQuery',false);
mongoose.connect(process.env.CONNECTION_STRING,{dbname:'eshop-database'})
.then(()=>{
    console.log('Connection ready...')
})
.catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log('server is running https://localhost:3000');
    
})
