const express = require('express')
const path = require('path')
const knex = require('knex')
const PORT = process.env.PORT || 5000
const router = require("./src/Route.ts")
const login = require("./src/Routes/Login.ts")
const bodyParser = require('body-parser')
const App = express();
const cors = require('cors');
const db =  knex({
    client :'pg',
    connection:{
    // host: "127.0.0.1", // for locahost db
    // user: "",
    // password: "",
    //database: "database_name"
    connectionString: process.env.DATABASE_URL,
    ssl:true,
    
    }
});

App.use(cors())
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:false}))
App.use('/',router);
App.listen(PORT)