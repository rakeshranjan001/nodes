const express = require('express')



const router = express.Router();

router.get('/',(req,res)=>{
    res.send({
        message :"Homepage !!"
    })
})

router.get('/browse',(req,res)=>{
    res.send({
        message :"Browse !!" 
    })
})

module.exports = router