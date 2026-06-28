import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Home from '@/pages/Home.vue'
import Lista from '@/pages/Lista.vue'
import Cadastro from '@/pages/Cadastro.vue'
import Sobre from '@/pages/Sobre.vue'
import Login from '@/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/lista',
      name: 'lista',
      component: Lista,
      meta: { requiresAuth: true }
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
      meta: { requiresAuth: true }
    },
    {
      path: '/cadastro/:id',
      name: 'editar',
      component: Cadastro,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }

  if (to.name === 'login' && authStore.isAuthenticated) {
    return { name: 'home' }
  }
})

export default router