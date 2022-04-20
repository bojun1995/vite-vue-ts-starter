import { createRouter, createWebHashHistory } from 'vue-router'

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/base/Home/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/base/NotFound/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes,
})

export default router
