import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDaG1tBlJwL5K6UjkzzESXtdRel5DcPSWI",
    authDomain: "dropbox-clone-ee117.firebaseapp.com",
    projectId: "dropbox-clone-ee117",
    storageBucket: "dropbox-clone-ee117.appspot.com",
    messagingSenderId: "536376747203",
    appId: "1:536376747203:web:21823aa6780d0f466cee76"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage}