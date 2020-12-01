import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/start",
    name: "Start",
    component: () =>
      import("../views/Start.vue")
  },
  {
    path: "/todolist",
    name: "TodoList",
    component: () => 
      import("../views/TodoList.vue")
  },
  {
    path: "/chartTest",
    name: "chartTest",
    component: () =>
      import("../views/ChartTest.vue"),
    children: [
      {
        path: 'chartjs',
        component: () =>
          import("../views/Chartjs.vue")
      },
      {
        path: 'googlechart',
        component: () =>
          import("../views/GoogleChart.vue")
      }
    ]
  },
  {
    path: "/vuetstrap",
    component: () =>
      import("../views/Vuetstrap.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
