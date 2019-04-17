const express = require("express");
const path = require("path");
const knex = require("knex");
const signup = express.Router();
const bcrypt = require('bcrypt-nodejs');
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1", // for locahost db
    user: "",
    password: "",
    database: "node-masters"
  }
});

signup.get("/", (req, res) => {
  res.sendFile("newusersignup.html", { root: "./src/views/pages" });
});
module.exports = signup;

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
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  }).catch(err => res.status(400).json("Error Unable to register"));
})
