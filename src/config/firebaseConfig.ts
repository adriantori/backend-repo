import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = require('../../creds.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = getFirestore();

export { admin, db };
