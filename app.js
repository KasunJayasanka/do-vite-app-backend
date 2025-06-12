// app.js
const express = require('express');
const cors = require('cors');
const tasks = require('./controllers/tasksController');

const app = express();
app.use(cors());
app.use(express.json());

// Mount each endpoint:
app.get   ('/tasks',     tasks.getAll);
app.post  ('/tasks',     tasks.create);
app.put   ('/tasks/:id', tasks.update);
app.delete('/tasks/:id', tasks.remove);

module.exports = app;
