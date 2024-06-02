// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import MyAbout from '../components/About.vue';
import MyProfile from '../components/Profile.vue';
import MyPhotos from '../components/Photos.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: MyAbout },
  { path: '/profile', component: MyProfile },
  { path: '/photos', component: MyPhotos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
