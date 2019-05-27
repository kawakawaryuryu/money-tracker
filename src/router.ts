import Vue from 'vue';
import Router from 'vue-router';

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
      path: '/calendar',
      name: 'calendar',
      component: () =>
        import('@/components/month/calendar/MonthCalendar.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () =>
        import('@/components/month/detail/MonthDetail.vue'),
    },
  ],
});
