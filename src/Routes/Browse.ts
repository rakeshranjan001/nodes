var express = require('express')


var browse = express.Router();

browse.get('/',(req,res)=>{
    res.send({
        message:"browse page !!"
    })
})
module.exports = browse;