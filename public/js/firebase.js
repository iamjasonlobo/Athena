let firebaseConfig = {
  apiKey: "AIzaSyCty_rTzgDjRKncobBODYAUIwLF2IjnkT8",
  authDomain: "athena-blog-website.firebaseapp.com",
  projectId: "athena-blog-website",
  storageBucket: "athena-blog-website.appspot.com",
  messagingSenderId: "567118205351",
  appId: "1:567118205351:web:ba848b4c1dd1e997682682"
};

firebase.initializeApp(firebaseConfig);


let db = firebase.firestore();