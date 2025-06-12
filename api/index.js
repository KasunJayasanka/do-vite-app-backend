// api/index.js
const serverless = require("serverless-http");
const express    = require("express");
const cors       = require("cors");
const db         = require("../firebaseAdmin");      // CommonJS require
const tasksCtrl  = require("../controllers/tasksController");

const app = express();
app.use(cors());
app.use(express.json());

// mount your controllers directly
app.get   ("/tasks",     tasksCtrl.getAll);
app.post  ("/tasks",     tasksCtrl.create);
app.put   ("/tasks/:id", tasksCtrl.update);
app.delete("/tasks/:id", tasksCtrl.remove);

module.exports = serverless(app);
