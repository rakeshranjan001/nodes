var express = require('express')
var path = require('path')

var signup = express.Router();

signup.get('/',(req,res)=>{
    res.sendFile('newusersignup.html',{root:'./src/views/pages'});
})
module.exports = signup;