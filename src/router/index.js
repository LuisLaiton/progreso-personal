import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('@/views/StartView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('@/views/RegistrationView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: "/:pathMach(.*)*",
      name: "NotFound",
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})
export default router