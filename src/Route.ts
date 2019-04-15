const express = require('express')
var login = require('./Routes/Login.ts')
var search = require('./Routes/Search.ts')
var browse = require('./Routes/Browse.ts')
var signup = require('./Routes/newusersignup.ts')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send({
        message :"Homepage !!"
    })
})

router.use('/signup',signup);
router.use('/browse',browse);
router.use('/login',login);
router.use('/search',search);



module.exports = router