import Vue from 'vue';
import Router from 'vue-router';
import Input from '@/components/Input.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/result',
      name: 'result',
      component: () =>
        import('@/components/month/result/MonthResult.vue'),
    },
    {
      path: '/input',
      name: 'input',
      component: () =>
        import('@/components/Input.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () =>
        import('@/components/month/calendar/MonthCalendar.vue'),
    },
  ],
});
