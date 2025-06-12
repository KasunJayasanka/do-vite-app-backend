const db = require('../firebaseAdmin');
const tasksCol = db.collection('tasks');

exports.getAll = async (req, res) => {
  try {
    const snap = await tasksCol.get();
    const tasks = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(tasks);
  } catch (err) {
    console.error('GET /tasks error:', err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, description = '', completed = false } = req.body;
    const createdAt = new Date().toISOString();
    const docRef = await tasksCol.add({ title, description, completed, createdAt });
    res.status(201).json({ id: docRef.id, title, description, completed, createdAt });
  } catch (err) {
    console.error('POST /tasks error:', err);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, description = '', completed } = req.body;
    const docRef = tasksCol.doc(req.params.id);
    await docRef.update({ title, description, completed });
    const updatedSnap = await docRef.get();
    res.json({ id: updatedSnap.id, ...updatedSnap.data() });
  } catch (err) {
    console.error(`PUT /tasks/${req.params.id} error:`, err);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

exports.remove = async (req, res) => {
  try {
    await tasksCol.doc(req.params.id).delete();
    res.sendStatus(204);
  } catch (err) {
    console.error(`DELETE /tasks/${req.params.id} error:`, err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
