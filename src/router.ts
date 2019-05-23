import Vue from 'vue';
import Router from 'vue-router';
import Input from '@/components/Input.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/input',
      name: 'input',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Input,
    },
    {
      path: '/calendar',
      name: 'calendar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('./components/month/calendar/MonthCalendar.vue'),
    },
  ],
});
