import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'; // Import your views
import AllBuildingsPage from './views/AllBuildingsPage.vue';
import Calendar from './views/Calendar.vue';
const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/buildings',
    component: AllBuildingsPage,
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;