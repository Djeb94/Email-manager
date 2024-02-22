import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import IndexPage from './pages/ConversationsIndexPage.vue'
import ConversationContent from './pages/ConversationsContent.vue'

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

export default router;
