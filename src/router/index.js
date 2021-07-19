import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/views/Profile/index';
import Billing from '@/views/Billing/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Profile,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/billing',
      name: 'Billing',
      component: Billing,
    },
  ],
});
