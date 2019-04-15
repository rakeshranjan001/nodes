var express = require('express')
var path = require('path')

var home = express.Router();

home.get('/',(req,res)=>{
    res.sendFile('home.html',{root:'./views/pages'});
})
module.exports = home;