// api/firebaseAdmin.js
import admin from 'firebase-admin';

let db;
try {
  const raw = process.env.SERVICE_ACCOUNT_KEY;
  console.log("🔑 SERVICE_ACCOUNT_KEY present? ", Boolean(raw));
  const serviceAccount = JSON.parse(raw);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  db = admin.firestore();
  console.log("✅ Firebase Admin initialized");
} catch (err) {
  console.error("❌ Error initializing Firebase Admin:", err);
  // Rethrow so the Function fails clearly
  throw err;
}

export default db;

