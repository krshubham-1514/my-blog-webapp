const express = require('express')
const mongoose = require('mongoose')
const articlesRoute=require('./routes/articles')
const morgan=require('morgan')
const cors =require('cors');
require('dotenv').config()

const app = express()


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(articlesRoute);

const port=process.env.PORT ||5000;
const db_url=process.env.mongo_url;
console.log(process.env.mongo_url);
const db=mongoose.connect(db_url,{useNewUrlParser: true,useUnifiedTopology: true}).then((db)=>{
    console.log('Connected to server')
}).catch((err)=>{
    console.log('Error connecting to server')
})




app.listen(port,(err)=>{
    console.log(`Listening Port ${port}`);
})