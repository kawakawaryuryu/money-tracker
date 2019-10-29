import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/result",
      name: "result",
      component: () => import("@/components/result/MonthResult.vue")
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("@/components/calendar/MonthCalendar.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("@/components/detail/MonthDetail.vue")
    }
  ]
});
