var express = require('express')

var login = express.Router();

login.get('/',(req,res)=>{
    res.sendFile('login.html',{root:'./views/pages'});
})
module.exports = login;