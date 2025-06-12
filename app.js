const express = require('express');
const cors = require('cors');
const tasksRouter = require('./api/tasks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

// optional health-check
app.get('/', (req, res) => res.send('API is up'));

module.exports = app;
