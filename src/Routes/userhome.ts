var express = require('express')


var user = express.Router();

user.get('/',(req,res)=>{
    res.send({
        message:"user Home !!"
    })
})
module.exports = user;