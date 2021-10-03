import { createWebHistory, createRouter } from "vue-router";
import Intro from "../pages/Intro.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Posts from "../pages/Posts.vue";
import Auth from "../pages/Auth.vue";
import NotFound from "../pages/NotFound.vue";
import PostIdPage from "../pages/PostIdPage.vue";

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
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/auth",
    component: Auth,
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
