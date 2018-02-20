
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './components/App.vue';
import Home from './components/pages/Home.vue';
import Services from './components/pages/Services.vue';
import Testimonials from './components/pages/Testimonials.vue';
import Gallery from './components/pages/Gallery.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/testimonials',
    component: Testimonials
  },
  {
    path: '/gallery',
    component: Gallery
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  router,  
  render: h => h(App)
}).$mount('#app');


require('./bulma-extensions');
