import { createWebHistory, createRouter } from "vue-router";
import Intro from "../pages/Intro.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/",
    component: Intro,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
