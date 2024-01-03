<template lang="">
    <div class="container">
        <h1>Sign In To An Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" id="" /></p>
        <p><input type="password" placeholder="Password" v-model="password" id="" /></p>
        <p class="errMsg"  v-if="errMsg"> {{errMsg}}</p>
        <p><button @click="login">Login</button></p>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref('')
const password = ref('')
const errMsg = ref("")
const router = useRouter()

const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully Login !")
      router.push("/data")
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "subhanAllah, Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "SubhanAllah, No Account With That Email Was Found";
          break;
        case "auth/wrong-password":
          errMsg.value = "SubhanAllah, Wrong Password Bro";
          break;
        default:
          errMsg.value = "Haiiiiih, Email or Password was Incorrect";
          break;
      }
    })
}


const signInWithGoogle = () => {

}

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(../assets/loginBack.png);
  background-size: cover;
}
.container h1{
  margin-bottom: 20px;
  color: white;
}

.container p input{
  min-width: 300px;
  padding: 15px 40px;
  font-size: 20px;
  border-radius: 15px;
}

.container p button{
  min-width: 385px;
  padding: 15px 60px;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
  background: linear-gradient(rgb(16, 31, 25),rgb(12, 128, 41));
  color: aliceblue;
}

.errMsg {
  color: red;
  background-color: rgb(255, 204, 204, 0.5);
  padding: 10px;
  border-radius: 5px
}
</style>