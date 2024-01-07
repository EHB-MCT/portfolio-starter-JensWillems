// src/routes/index.js
const express = require('express');
const router = express.Router();

const spellsRoutes = require('./spells');
const schoolsRoutes = require('./schools'); 

const initEndpoints = (app, db) => {
  app.use('/spells', spellsRoutes);
  app.use('/schools', schoolsRoutes); 
};

module.exports = initEndpoints;
