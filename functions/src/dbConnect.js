import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "../credentials.js"

initializeApp({
    credentials: cert(creds)
});

export const db = getFirestore();