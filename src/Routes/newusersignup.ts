const express = require('express')
const path = require('path')
const knex = require('knex')
const signup = express.Router();
const db =  knex({
    client :'pg',
    connection:{
        
        host: '127.0.0.1',// for locahost db
        user:'',
        password:'',
        database:'node-masters'
    }
});

signup.get('/',(req,res)=>{
    res.sendFile('newusersignup.html',{root:'./src/views/pages'});
})
module.exports = signup;

signup.post('/',(req,res)=>{
    const{name,email}=req.body;
    db('users')
        .returning('*')
        .insert({
            email: email,
            name: name,
            joined: new Date()
        })
    .then(user =>{
        res.json(user[0]);
    })
    .catch(err => res.status(400).json('Error Unable to register'))
})