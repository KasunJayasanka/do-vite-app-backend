// backend/firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore directly
module.exports = admin.firestore();

