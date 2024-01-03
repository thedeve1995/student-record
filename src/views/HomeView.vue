<script setup>
import router from '../router';

const gotoLogin= () => {
    router.push("/login")
}
</script>

<template>
  <main class="main" >
    <!-- <div class="container-top">
      <h1 id="top-header">Mewujudkan generasi dengan aqidah <br> islam yang sesuai tuntunan <br> Al Qur’an dan As-Sunnah</h1>
      <button id="lgnButton" @click="gotoLogin">Login</button>
    </div>
    
    <div>
      <img src="../assets/Logo.png" alt="" width="350">
    </div>
    <div class="container-bottom">
      <h1 id="bottom-header">Mewujudkan generasi dengan aqidah  islam yang sesuai tuntunan  Al Qur’an dan As-Sunnah</h1>
      <button style="position: relative;left: 50%;transform: translateX(-50%);" id="lgnButton" @click="gotoLogin">Login</button>
    </div> -->
    <div class="container">
      <h1>DGC</h1>
      <button id="lgnButton" @click="gotoLogin">Login</button>
    </div>
    
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;1,500&display=swap');

.main {
  background: url(../assets/back.png);
  background-size: cover;
  width: 100vw;
  min-height: 95vh;
  display: flex;
  place-items: center;
  font-family: 'Poppins', sans-serif;
  
}

#lgnButton{
  padding: 10px 40px;
  background-color: rgb(12, 128, 41);
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 10px;
  color: rgb(206, 208, 208);
  cursor: pointer;
  transform: translateY(30px);
}

.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container h1{
  font-size: 200px;
  color: aliceblue;
  margin-bottom: -50px;
  margin-top: -100px;
  font-family: 'Barlow Condensed', sans-serif;
}

</style>
