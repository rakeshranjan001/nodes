var express = require('express')

var login = express.Router();

login.get('/',(req,res)=>{
    res.sendFile('login.html',{root:'./src/views/pages'});
})
module.exports = login;