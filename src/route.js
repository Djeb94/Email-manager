import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import IndexPage from './pages/ConversationsIndexPage.vue';
import ShowPage from './pages/ConversationsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/conversations',
    component: IndexPage,
    children: [
      { path: '', component: IndexPage },
      { path: ':id', component: ShowPage, props: true }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;