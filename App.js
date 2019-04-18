var express = require('express');
var path = require('path');
var knex = require('knex');
var PORT = process.env.PORT || 5000;
var router = require("./src/Route.ts");
var login = require("./src/Routes/Login.ts");
var summary = require("./src/Routes/summary.ts")
var bodyParser = require('body-parser');
var App = express();
var db = knex({
    client: 'pg',
    connection: {
        // user: "",
        // password: "",
        //database: "database_name"
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
});
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use('/', router);
App.listen(PORT);
