// src/routes/schools.js
const express = require('express');
const router = express.Router();
const db = require('../db.js');
const { CheckSchoolName } = require('../helpers/endpointSchools.js');

// POST /schools/postSchool
router.post('/postSchool', async (req, res) => {
    const schoolData = req.body;
  
    if (CheckSchoolName(schoolData.school_name)) {
      try {
        await db('schools_of_magic').insert(schoolData);
  
        const insertedSchool = await db('schools_of_magic')
          .where('school_name', schoolData.school_name)
          .first();
  
        res.status(201).json(insertedSchool);
      } catch (err) {
        console.error('Error inserting school:', err);
        res.status(500).json({ error: err });
      }
    } else {
      res.status(401).send({ message: 'School name not formatted correctly' });
    }
  });

// GET /schools/:schoolId
router.get('/:schoolId', async (req, res) => {
  const { schoolId } = req.params;

  try {
    const school = await db('schools_of_magic').where('id', schoolId).first();

    if (school) {
      res.status(200).json(school);
    } else {
      res.status(404).json({ message: `School with ID ${schoolId} not found` });
    }
  } catch (err) {
    console.error('Error fetching school details:', err);
    res.status(500).json({ error: 'Error fetching school details' });
  }
});

module.exports = router;
