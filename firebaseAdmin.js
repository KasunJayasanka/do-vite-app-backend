// firebaseAdmin.js  (at your repo root)
const admin = require('firebase-admin');

// Parse the service‐account JSON from the env var
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore directly as a CJS export
module.exports = admin.firestore();
