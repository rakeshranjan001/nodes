const express = require('express')
var login = require('./Routes/Login.ts')
var search = require('./Routes/Search.ts')


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

router.use('/login',login);
router.use('/search',search);



module.exports = router