import { createRouter, createWebHistory } from 'vue-router'
import Method1 from '../views/Method1.vue'
import Method2 from '../views/Method2.vue'
import Method3 from '../views/Method3.vue'

const routes = [
  {
    path: '/',
    component: Method1
  },
  {
    path: '/method2',
    component: Method2
  },
  {
    path: '/method3',
    component: Method3
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
