const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var router = require("./src/Route.ts")
var login = require("./src/Routes/Login.ts")

const App = express();

App.use('/',router);
App.listen(PORT)