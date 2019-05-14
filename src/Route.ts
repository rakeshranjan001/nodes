const express = require('express')
var login = require('./Routes/Login.ts')
//var search = require('./Routes/Search.ts')
//var browse = require('./Routes/Browse.ts')
var signup = require('./Routes/newusersignup.ts')
var home  = require('./Routes/Home.ts')
//var user = require('./Routes/userhome.ts')
var summary = require('./Routes/summary.ts')
const router = express.Router();


router.use('/',home);
router.use('/signup',signup);
//router.use('/browse',browse);
router.use('/login',login);
//router.use('/search',search);
//router.use('/userhome',user);
router.use('/summary',summary);


module.exports = router;