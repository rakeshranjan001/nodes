const express = require("express");
const path = require("path");
const signup = express.Router();
const bcrypt = require('bcrypt-nodejs');

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  }
});

signup.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction(trx => {
    trx
      .insert({
        hash: hash,
        email: email
      })
      .into("login")
      .returning("email")
      .then(loginEmail => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json({
              status:200,
              message: "successfully registered"
            });
            createUserTab;
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  }).catch(err => res.status(400).json("Error Unable to register"));
})

function createUserTab() {  
  var maxID = db.max('id').from('users')
  console.log(maxID);
}
module.exports = signup;
