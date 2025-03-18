import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/pages/Home.vue';
import Game from '../src/pages/Game.vue';
import Profile from '../src/pages/Profile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/game', name: 'Game', component: Game },
    { path: '/profile', name: 'Profile', component: Profile },
  ],
});

export default router;
