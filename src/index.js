// src\index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const { CheckStudentName } = require("./helpers/endpointHelpers.js");

const app = express();
const port = 3000;


app.use(bodyParser.json());


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

  if(CheckStudentName(studentData.name)){
    db('students').insert(studentData).returning('*').then((insertedStudent)=> {
      res.status(201).json(insertedStudent[0]);
        }).catch((err)=> {
          res.status(500).json({error:err});
        })
  // if (!studentData.name) {
  //   return res.status(400).json({ status: 'error', message: 'Name is required' });
  // }

  // try {
  //   await db('students').insert(studentData);
  //   console.log('Data inserted');
  //   res.json({ status: 'success', message: 'Data inserted successfully' });
  // } catch (err) {
  //   console.error('Error inserting data into the database:', err);
  //   res.status(500).json({ status: 'error', message: 'Internal Server Error', error: err.message });
  // }
} else {
  res.status(401).send({message: "name not formatted correctly"})
}
});

// app.get('/students/:id', async ( req, res) =>{
//   const id = parseInt(req.params.id);
//   db('students').where({id}).first().then((student) => {
//     if (student) {
//       res.json(student);
//     } else {
//       res.status(404).json({error: 'Student not found'});
//     }
//   })
// }).catch((error)=> {
//   console.error(error);
//   res.status().json({error: 'An error occured while fetching'});
// });
app.get('/students/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const student = await db('students').where({ id }).first();
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching' });
  }
});

app.post('/postClass', async (req, res) => {
  const classData = req.body;

  // if (!classData.class || !classData.uuid || !classData.average_grade || !classData.classroom) {
  //   return res.status(400).json({ status: 'error', message: 'Class data is incomplete' });
  // }

  try {
    await db('classes').insert(classData);
    console.log('Class data inserted');
    res.json({ status: 'success', message: 'Class data inserted successfully' });
  } catch (err) {
    console.error('Error inserting class data into the database:', err);
    res.status(500).json({ status: 'error', message: 'Internal Server Error', error: err.message });
  }
});




app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;