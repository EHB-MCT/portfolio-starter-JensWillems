// src/routes/spells.js
const express = require('express');
const router = express.Router();
const db = require('../db.js')
const { CheckSpellName } = require("../helpers/endpointHelpers.js");


// POST /spells/postSpell
router.post('/postSpell', async (req, res) => {
  const spellData = req.body;

  if (CheckSpellName(spellData.spell_name)) {
    db('spells').insert(spellData).returning('*')
      .then((insertedSpell) => {
        res.status(201).json(insertedSpell[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } else {
    res.status(401).send({ message: "Spell name not formatted correctly" });
  }
});

// GET /spells
router.get('/', async (req, res) => {
    try {
      const spells = await db('spells').select('*');
      res.status(200).json(spells);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });
// GET /spells/:spellId
router.get('/:spellId', async (req, res) => {
    const { spellId } = req.params;
  
    try {
      const spell = await db('spells').where('id', spellId).first();
  
      if (spell) {
        res.status(200).json(spell);
      } else {
        res.status(404).json({ message: `Spell with ID ${spellId} not found` });
      }
    } catch (err) {
      console.error('Error fetching spell details:', err);
      res.status(500).json({ error: 'Error fetching spell details' });
    }
  });
  
module.exports = router;