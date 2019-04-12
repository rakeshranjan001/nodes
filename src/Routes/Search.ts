var express = require('express')


var search = express.Router();

search.get('/',(req,res)=>{
    res.send({
        message:"search page !!"
    })
})
module.exports = search;