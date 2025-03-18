<script lang="ts" setup>
import { ref } from 'vue';

const welcomeMessage = ref('Welcome to Gambling Zone!');
</script>

<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center text-center custom-background">
    <!-- Judul dengan efek 3D shadow -->
    <h1 class="text-h2 text-primary mb-4 title-3d">{{ welcomeMessage }}</h1>
    <p class="text-h6 mb-8 subtitle-glow">Play smart, win big! Explore our exciting games and test your luck.</p>

    <!-- Tombol untuk memulai permainan -->
    <v-btn color="success" to="/game" size="x-large" elevation="12" class="btn-glow">
      Start Playing
    </v-btn>

    <!-- Gambar aesthetic dengan efek shadow mewah -->
    <v-img
      src="https://source.unsplash.com/800x400/?casino,gambling"
      alt="Gambling Image"
      class="mt-10 rounded-lg image-3d"
      height="400"
      contain
    />
  </v-container>
</template>

<style scoped>
/* Background utama dengan prioritas tinggi */
.custom-background {
  min-height: 100vh;
  background: #1e293b !important; /* Tambahkan !important untuk prioritas tinggi */
  color: white;
  box-shadow: 0 0 50px rgba(255, 105, 180, 0.3);
  overflow: hidden;
}

/* Efek 3D pada judul */
.title-3d {
  text-shadow: 4px 4px 10px rgba(255, 0, 255, 0.6), -4px -4px 10px rgba(0, 255, 255, 0.6);
  letter-spacing: 2px;
}

/* Subtitle dengan efek glow */
.subtitle-glow {
  color: #ff8c00;
  text-shadow: 0 0 15px rgba(255, 140, 0, 0.9);
}

/* Tombol dengan efek glow */
.btn-glow {
  background: linear-gradient(145deg, #00c853, #2e7d32);
  box-shadow: 0 8px 30px rgba(0, 255, 127, 0.8);
  transition: transform 0.3s;
}

.btn-glow:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(0, 255, 127, 1);
}

/* Gambar dengan efek 3D shadow */
.image-3d {
  box-shadow: 0 12px 35px rgba(255, 20, 147, 0.7);
  transition: transform 0.5s;
}

.image-3d:hover {
  transform: rotateY(10deg) rotateX(10deg) scale(1.05);
}
</style>
