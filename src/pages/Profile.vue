<script lang="ts" setup>
import { ref } from 'vue';

const user = ref({
  name: 'Player 1',
  balance: 10000,
  joinedAt: 'March 2025',
});
</script>

<template>
  <v-container class="profile-container">
    <v-card class="mx-auto" max-width="600" elevation="12">
      <v-card-title class="text-h4 text-center">Profile</v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>Name:</v-list-item-title>
            <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Balance:</v-list-item-title>
            <v-list-item-subtitle>${{ user.balance.toLocaleString() }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Joined:</v-list-item-title>
            <v-list-item-subtitle>{{ user.joinedAt }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn color="primary" to="/game">Play Now</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
}
</style>
