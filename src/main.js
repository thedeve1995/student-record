import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC94z53q9lRessKlPTIm5aAfnCiM6RZte4",
  authDomain: "studentrecord-daa13.firebaseapp.com",
  projectId: "studentrecord-daa13",
  storageBucket: "studentrecord-daa13.appspot.com",
  messagingSenderId: "828097011647",
  appId: "1:828097011647:web:d7bd01b375c72c630ccb0a",
  measurementId: "G-X5TX1HRFK1"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
