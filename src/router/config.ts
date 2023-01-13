import { RouteRecordRaw } from 'vue-router';
import layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/shop',
        name: 'shop',
        component: () => import('@/views/shop/index.vue'),
      },
      {
        path: '/storage',
        name: 'storage',
        component: () => import('@/views/storage/index.vue'),
      },
    ],
  },
];

export default routes;
