import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/films/:id',
    name: 'films',
    component: () => import('@/views/FilmDetails.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
