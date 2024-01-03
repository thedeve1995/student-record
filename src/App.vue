<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';

const isLoggedIn = ref(false)
let user = ref(null); 

let auth

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      isLoggedIn.value = true;
      user.value = firebaseUser; 
    } else {
      isLoggedIn.value = false;
      user.value = null; 
    }
  });
});

onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedIn.value= true;
    } else {
      isLoggedIn.value= false;
    }
  });
});


const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}
</script>

<template>
  <nav>
    <h1 >Student Record App</h1>
    <div v-if="isLoggedIn" class="navbar">
      <RouterLink to="/about"  class="link">Form</RouterLink>
      <RouterLink to="/data" class="link">Data</RouterLink>
      <RouterLink to="/register"  class="link">Register</RouterLink>
      <div class="loginUser">
        <p class="user" >{{ user.email.slice(0,7) }}</p>
        <button id="logout-btn" @click="handleSignOut" >Sign Out</button>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400;1,500;1,600;1,700;1,800&display=swap');
nav {
  background-color: rgb(12, 128, 41);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  z-index: 100;
}

#logout-btn{
  background-color: rgb(12, 128, 41);
  border: none;
  color: aliceblue;
  padding: 0 10px;
  border-radius: 5px;
}
nav h1{
  color: white;
}

.navbar {
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

 .link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.loginUser{
  width: 170px;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  background-color: rgb(16, 31, 25);
  padding: 5px 10px;
  border-radius:5px;
  font-family: 'Poppins', sans-serif;
  color: aliceblue;
}
</style>
