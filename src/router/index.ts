import { createRouter, createWebHistory } from 'vue-router';
import routes from './config';

const router = createRouter({
  routes: [...routes],
  history: createWebHistory(),
});

export default router;
