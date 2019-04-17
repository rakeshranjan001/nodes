const express = require('express')
const knex = require('knex')
const login = express.Router();

const db =  knex({
    client :'pg',
    connection:{
        
        host: '127.0.0.1',// for locahost db
        user:'',
        password:'',
        database:'node-masters'
    }
});

login.get('/',(req,res)=>{
    res.sendFile('login.html',{root:'./src/views/pages'});
})
login.post('/',(req,res)=>{
    res.send({
        message:"login"
    });
})



login.get('/profile/:id',(req,res)=>{
    const{id} =req.params;
    let found = false;
    db.select('*').from('users').where({id}) // .where({ id : id })
    .then(user =>{
        res.json(user[0]);
    })
    .catch(err=>res.status(404).json('Not Found'))

})
module.exports = login;