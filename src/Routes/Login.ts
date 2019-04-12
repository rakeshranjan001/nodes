var express = require('express')


var login = express.Router();

login.get('/',(req,res)=>{
    res.send({
        message:"Login Home !!"
    })
})
module.exports = login;