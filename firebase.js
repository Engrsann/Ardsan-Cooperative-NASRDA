// Sample Firebase config - replace with your project's config in firebase.js when ready
var firebaseConfig = {
  apiKey: "SAMPLE_API_KEY",
  authDomain: "sample.firebaseapp.com",
  projectId: "sample-project",
  storageBucket: "sample.appspot.com",
  messagingSenderId: "0000000000",
  appId: "1:000000000:web:sample"
};if(typeof firebase !== 'undefined' && firebase.initializeApp){try{firebase.initializeApp(firebaseConfig);}catch(e){console.warn(e)}}