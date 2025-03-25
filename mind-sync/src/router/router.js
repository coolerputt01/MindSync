import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '../views/LandingView.vue';

const routes = [
  { path: '', name: 'Landing', component: LandingView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
