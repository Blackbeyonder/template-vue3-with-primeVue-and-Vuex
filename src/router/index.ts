import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import home from "../views/homeView/homeTemplate.vue"; //Import the components that you need
import forms from "../views/formsView/formsTemplate.vue";

//you can add new routes HERE
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/forms",
    name: "forms",
    component: forms,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
