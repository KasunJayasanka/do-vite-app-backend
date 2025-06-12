// backend/firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore directly
module.exports = admin.firestore();

