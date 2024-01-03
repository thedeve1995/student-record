<template lang="">
    <div class="container">
        <h1>Create An Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" id="" /></p>
        <p><input type="text" placeholder="Password" v-model="password" id="" /></p>
        <p><button @click="register">Submit</button></p>
        <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully Registered!")
        router.push ("/data")
    })
    .catch((error) =>{
        console.log(error.code);
        alert(error.message)
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
  color: aliceblue;
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