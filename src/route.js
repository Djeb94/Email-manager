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
      { path: ':email.id', component: ConversationContent, props: true }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router;
