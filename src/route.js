import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import ConversationsPage from './pages/ConversationsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/conversations', component: ConversationsPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
