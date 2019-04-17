var express = require('express')
var path = require('path')

var home = express.Router();

home.get('/',(req,res)=>{
    res.send({
        message:"Home Page"
    })
})
module.exports = home;