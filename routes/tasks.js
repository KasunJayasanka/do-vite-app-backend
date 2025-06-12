const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasksController');

router.get('/', tasks.getAll);

router.post('/', tasks.create);

router.put('/:id', tasks.update);

router.delete('/:id', tasks.remove);

module.exports = router;
