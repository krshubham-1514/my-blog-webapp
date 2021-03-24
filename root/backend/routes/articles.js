const express = require('express');
const mongoose = require('mongoose');
const article = require('../model/article')
const articlesRouter=express.Router();

articlesRouter.route('/articles')
.get((req,res) => {
    res.setHeader('Content-Type', 'application/json');
    article.find({}).then(async(response,err) =>{
        if(err){
            return  Error(err);
        }else{

            res.statusCode=200;
            return res.json(response);

        }
        
        
    }).catch((err) =>{

        res.statusCode=403;
        return res.json({
            message: err.message
        });
    })

})
.post((req, res) =>{
    const {title,body,author}=req.body;
    console.log(title,body,author);

    article.create({title:title,body:body,author:author}).then(response => console.log('success')).catch(error => console.log('failed'));
})


articlesRouter.route('/articles/:id').get((req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    article.findById(req.params.id).then(response =>{
        res.statusCode = 200;
        return res.json(response);
    }).catch(error => console.log('failed'));
    
})

module.exports=articlesRouter;