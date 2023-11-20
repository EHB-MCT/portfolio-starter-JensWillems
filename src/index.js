// src\index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Include other routes and middleware as needed

// Routes for students
app.get('/students', async (req, res) => {
  try {
    const students = await db.select().from('students');
    console.log('Data successfully fetched');
    res.json({ status: 'success', data: students });
  } catch (err) {
    console.error('Error fetching data from the database:', err);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});

app.post('/postStudent', async (req, res) => {
  const studentData = req.body;

  if (!studentData.name) {
    return res.status(400).json({ status: 'error', message: 'Name is required' });
  }

  try {
    await db('students').insert(studentData);
    console.log('Data inserted');
    res.json({ status: 'success', message: 'Data inserted successfully' });
  } catch (err) {
    console.error('Error inserting data into the database:', err);
    res.status(500).json({ status: 'error', message: 'Internal Server Error', error: err.message });
  }
});

// Other routes for specializations or additional tables can be added similarly...

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
