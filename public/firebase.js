  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDy_G9wrDyODfzIHaVoVAx-_o-Rx0SKcg8",
    authDomain: "tryagainv0.firebaseapp.com",
    projectId: "tryagainv0",
    storageBucket: "tryagainv0.firebasestorage.app",
    messagingSenderId: "1047090858510",
    appId: "1:1047090858510:web:900b450648a81b9da70a5f",
    measurementId: "G-E5D1KQG977"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);