import { env } from "@/env.mjs";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: env.APIKEY,
  authDomain: env.AUTHDOMAIN,
  projectId: env.PROJECTID,
  storageBucket: env.STORAGEBUCKET,
  messagingSenderId: env.MESSAGINGSENDERID,
  appId: env.APPID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
