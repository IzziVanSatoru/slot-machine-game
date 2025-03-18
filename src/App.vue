<script lang="ts" setup>
import { ref } from 'vue';
import { VApp, VMain } from 'vuetify/components';
import Navbar from '../src/components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
/* Style khusus komponen ini */
</style>
