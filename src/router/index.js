import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/views/Profile/index';
import Billing from '@/views/Billing/index';
import Calendar from '@/views/Calendar/index';
import NewProfile from '@/views/Profile/newProfile';
import NewSession from '@/views/Calendar/newSession';
import NewInvoice from '@/views/Billing/newInvoice';

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
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/new-profile',
      name: 'NewProfile',
      component: NewProfile,
    },
    {
      path: '/new-session',
      name: 'NewSession',
      component: NewSession,
    },
    {
      path: '/new-invoice',
      name: 'NewInvoice',
      component: NewInvoice,
    },
  ],
});
