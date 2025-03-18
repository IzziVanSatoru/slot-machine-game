<script lang="ts" setup>
</script>

<template>
  <nav class="navbar">
    <h1>Gambling Zone 🎰</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/game">Game</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}

ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

a:hover {
  color: #f39c12;
}
</style>