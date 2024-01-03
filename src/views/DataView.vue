<template lang="">
  <div class="container">
    <h1>Tabel Record Siswa</h1>
    <table>
      <thead>
        <tr>
          <th style="width: 150px">Tanggal</th>
          <th>Nama</th>
          <th>Gambar</th>
          <th>Deskripsi</th>
          <!-- <th>Action</th> -->
        </tr>
      </thead>
      <tbody style="text-align: center">
        <tr v-for="(item, index) in recordData" :key="item.id">
          <td>{{ item.tanggal }}</td>
          <td>{{ item.nama }}</td>
          <td>
            <img
              @click="showImage(item.linkImage, item.deskripsi)"
              :src="item.linkImage"
              alt=""
              style="width: 100px"
            />
          </td>
          <td>{{ item.deskripsi }}</td>
          <!-- <td><button class="delete-button" @click="deleteData(item.id)">Delete</button></td> -->
        </tr>
      </tbody>
    </table>
  </div>
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="isModalOpen = false">&times;</span>
        <img :src="currentImageUrl" alt="Modal Image" style="width: 350px;" />
        <p style="text-align:center">{{ keterangan }}</p>
      </div>
    </div>
    
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import {
  collection,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { db } from '@/firebase'



const isModalOpen = ref(false)
const currentImageUrl = ref('')
const keterangan = ref('');

const showImage = (imageUrl, description) => {
  currentImageUrl.value = imageUrl
  isModalOpen.value = true
  keterangan.value = description
}


const recordData = ref([]);
onMounted(() => {
  fetchData()
})

const recordCollectionQuery = query(
  collection(db, 'studentRecord'),
  orderBy('tanggal', 'asc')
)
const fetchData = () => {
  onSnapshot(recordCollectionQuery, (querySnapshot) => {
    const firestoreData = []

    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        tanggal: doc.data().tanggal,
        nama: doc.data().nama,
        linkImage: doc.data().linkImage,
        deskripsi: doc.data().deskripsi
      }
      firestoreData.push(data)
    })
    recordData.value = firestoreData
  })
}

</script>

<style scoped>

.container{
  width: 100vw;
  height: 100vh;
  background: url(../assets/loginBack.png);
  background-size: cover;
}

.container h1{
  text-align: center;
  padding-top: 50px;
  color: white;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

/* Style for the modal content */
.modal-content {
  margin: 5% auto;
  padding: 20px;
  background-color: #fefefe;
  border: 1px solid #888;
  max-width: 350px;
}

/* Style for the close button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

table {

  border-collapse: collapse;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-80%);
  color: black;

}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  text-align: center;
  background-color: #000000;
  backdrop-filter: blur(2px);
  color: black;
}

th {
  background-color: #f2f2f2;
  background:rgb(12, 128, 41);
  color: black;
}

tr:nth-child(even) {
  background-color: rgb(180, 220, 194);
}

tr:hover {
  background-color: #f2f2f2;
}

img {
  cursor: pointer;
}
</style>