<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const tokens = ref<number>(0);
const message = ref<string>('');
const spinning = ref<boolean>(false);
const slots = ref<string[]>(['🍒', '🍋', '🍉']);
const bet = ref<number>(0);

const symbols = ['🍒', '🍋', '🍉', '🍊', '🍇', '⭐'];

// Statistik
const wins = ref<number>(0);
const losses = ref<number>(0);
const totalWinTokens = ref<number>(0);
const totalLoseTokens = ref<number>(0);

const spin = () => {
  if (tokens.value < 1) {
    message.value = 'Token kurang! Minimal 1 untuk bermain.';
    return;
  }

  bet.value = tokens.value; // Simpan token yang dipertaruhkan
  spinning.value = true;
  message.value = '';

  // Kurangi token sesuai jumlah taruhan
  tokens.value = 0; 
  totalLoseTokens.value += bet.value;

  // Simulasi animasi spin 2x dengan kecepatan 4x
  let spinCount = 0;
  const spinInterval = setInterval(() => {
    slots.value = slots.value.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    spinCount++;

    // Hentikan animasi setelah 2x spin (kecepatan 4x)
    if (spinCount === 8) {
      clearInterval(spinInterval);
      spinning.value = false;

      const isWin = slots.value.every((s) => s === slots.value[0]);

      if (isWin) {
        const reward = bet.value * 3; // Menang: token x3
        tokens.value += reward;
        totalWinTokens.value += reward;
        wins.value++;
        message.value = `Selamat YA 🎉 Kamu menang +${reward} token!`;
      } else {
        losses.value++;
        message.value = `Kalah Dasar Skill issue 😢 -${bet.value} token`;
      }
    }
  }, 125); // 4x kecepatan normal
};

const cheatWin = () => {
  slots.value = ['🍒', '🍒', '🍒'];
  const reward = bet.value * 3;
  tokens.value += reward;
  totalWinTokens.value += reward;
  wins.value++;
  message.value = 'CHEAT: Kamu Menang Besar! 🎰';
};
</script>

<template>
  <div class="game-container">
    <div class="game-card">
      <h2>🎰 Slot Machine 🎰</h2>

      <p>Masukkan token untuk bermain:</p>
      <input v-model.number="tokens" type="number" min="0" placeholder="Jumlah Token" />

      <div class="slot-machine">
        <div class="slot" v-for="(slot, index) in slots" :key="index">{{ slot }}</div>
      </div>

      <button :disabled="spinning || tokens < 1" @click="spin">
        {{ spinning ? 'Spinning...' : 'Spin Sekarang' }}
      </button>

      <p>{{ message }}</p>

      <button @click="router.push('/')">Kembali ke Home</button>

      <!-- Dashboard Statistik -->
      <div class="dashboard">
        <h3>📊 Dashboard Statistik 📊</h3>
        <p>Menang: {{ wins }} kali (Total +{{ totalWinTokens }} token)</p>
        <p>Kalah: {{ losses }} kali (Total -{{ totalLoseTokens }} token)</p>
      </div>

      <!-- Tombol cheat auto win (tersembunyi di pojok kanan bawah) -->
      <div class="cheat-area" @click="cheatWin">CHEAT</div>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
}

.game-card {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #2c3e50;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

input {
  padding: 0.5rem;
  margin: 1rem 0;
  border: none;
  border-radius: 8px;
}

button {
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:disabled {
  background: #555;
  cursor: not-allowed;
}

button:not(:disabled) {
  background: #4caf50;
  color: white;
}

button:not(:disabled):hover {
  background: #45a049;
}

.slot-machine {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.slot {
  width: 60px;
  height: 60px;
  margin: 0 0.5rem;
  border-radius: 8px;
  font-size: 2rem;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

/* Tombol cheat auto win di pojok kanan bawah */
.cheat-area {
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: 0;
  transition: opacity 0.3s;
  background: #ff4757;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.cheat-area:hover {
  opacity: 1;
}

.dashboard {
  margin-top: 2rem;
  background: #1e293b;
  padding: 1rem;
  border-radius: 12px;
}
</style>
