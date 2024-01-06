//src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const initEndpoints = require("./routes");
const db = require('./db');

const app = express();
app.use(bodyParser.json());

initEndpoints(app, db);

app.get("/", (req, res)=>{
    res.send(200)
})

module.exports = app;
