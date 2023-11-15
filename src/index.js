const express = require("express");
const bodyParser = require('body-parser');
const knex = require('knex');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
  },
});

app.get("/", (req, res) => {
  res.send({message: "hello"})
})

app.get("/users", async (req, res) => {
  try {
    const users = await db.select().from('users');
    console.log("Data successfully fetched");
    res.json({ status: 'success', data: users });
  } catch (err) {
    console.error('Error fetching data from the database:', err);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});

app.post("/postUser", async (req, res) => {
    const userName = req.body.name;
  
    if (!userName) {
      return res.status(400).json({ status: 'error', message: 'Name is required' });
    }
  
    try {
      await db('users').insert({ name: userName });
      console.log('Data inserted');
      res.json({ status: 'success', message: 'Data inserted successfully' });
    } catch (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error', error: err.message });
    }
  });

  app.delete("/deleteUser/:userId", async (req, res) => {
    const userId = req.params.userId;
  
    if (!userId) {
      return res.status(400).json({ status: 'error', message: 'User ID is required' });
    }
  
    try {
      const deletedCount = await db('users').where({ id: userId }).del();
      if (deletedCount === 1) {
        console.log('User deleted successfully');
        res.json({ status: 'success', message: 'User deleted successfully' });
      } else {
        console.log('User not found');
        res.status(404).json({ status: 'error', message: 'User not found' });
      }
    } catch (err) {
      console.error('Error deleting user from the database:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error', error: err.message });
    }
  });
  

  app.listen(3000, (err) => {
    if (!err) {
      console.log("Running on port " + 3000);
    } else {
      console.log(err);
    }
  });