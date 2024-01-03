<template>
  <div class="about">
    <div class="form">
      <h2>Formulir Penambahan Record</h2>
      <br>
      <form @submit.prevent="submitForm">
        <input type="date" id="tanggal" v-model="tanggal" required />
        <input type="text" id="nama" v-model="nama" placeholder="Nama" required />
        <textarea type="text" id="deskripsi" v-model="deskripsi" placeholder="Deskripsi" required />
        <input style="width: 200px" type="file" class="input" id="fileImage" @change="handleImageUpload" />
        <button type="submit">Add Record</button>
      </form>
    </div>
  </div>
</template>

<script type="module" setup>
import { ref } from 'vue'
import {
  addDoc,
  collection,
} from 'firebase/firestore'
import { db } from '@/firebase'
import { storage } from '@/firebase'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

let selectedImageFile = null
let imageRef // Define imageRef globally
const linkImage = ref('');
const tanggal = ref('')
const nama = ref('')
const deskripsi = ref('')

const submitForm = async () => {
  try {
    // Check if an image was uploaded
    if (selectedImageFile) {
      // Upload the image to Firebase Storage
      await uploadBytes(imageRef, selectedImageFile)
      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef)
      // Update the linkImage field with the image URL
      linkImage.value = imageUrl
    }

    const recordData = {
      nama: nama.value,
      tanggal: tanggal.value,
      linkImage: linkImage.value,
      deskripsi: deskripsi.value
    }
    await addDoc(collection(db, 'studentRecord'), recordData)
    // Clear form fields
    nama.value = ''
    tanggal.value = ''
    linkImage.value = ''
    deskripsi.value = ''
    selectedImageFile = null

    alert("Data Sudah Berhasil Di Upload")
  } catch (error) {
    console.error('Error:', error)
  }
}


const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Initialize imageRef within handleImageUpload
    imageRef = storageRef(storage, file.name)
    selectedImageFile = file
  }
}




</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400;1,500;1,600;1,700;1,800&display=swap');
.about {
  background-color: rgb(16, 31, 25);
  width: 100vw;
  height: 90vh;
  display: flex;
  place-items: center;
  justify-content: center;
  
  background: url(../assets/loginBack.png);
  background-size: cover;
}

.form {
  display: grid;
  gap: 10px;
  background-color: rgba(200, 203, 200, 0.582);
  padding: 30px 40px;
  border-radius: 20px;
  backdrop-filter: blur(2px);
  
}

form {
  display: grid;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
}

.form h2{
  color: aliceblue;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

form input,
form select,
form textarea,
#fileImage {
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgb(40, 40, 40);
  background-color: white;
  min-width: 400px;
}

form button {
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgb(40, 40, 40);
  cursor: pointer;
  max-width: 200px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  background-color: rgb(12, 128, 41);
  color: white;
  font-family: 'Poppins', sans-serif;
  transition: all 0.5s;
}

form button:hover{
  box-shadow: 0 0 10px rgb(200, 200, 200);
  font-weight: 600;
}

form button:active{
  box-shadow: 0 0 5px rgb(220, 220, 220);
  font-weight: 400;
}
</style>


