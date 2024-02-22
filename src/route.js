import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import IndexPage from './pages/ConversationsIndexPage.vue'
import ConversationContent from './pages/ConversationsContent.vue'
import store from './store'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/conversations',
    component: IndexPage,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: IndexPage },
      { path: ':id', component: ConversationContent, props: true }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    next('/') // Redirige vers la page d'accueil si l'utilisateur n'est pas authentifié
  } else {
    next() // Sinon, autorise l'accès à la route
  }
})

export default router;
