import Main from "@/pages/Main";
import About from "@/pages/About";
import PostId from "@/pages/PostId";
import PostPage from "@/pages/PostPage";
import PostStore from "@/pages/PostStore";
import PostComposition from "@/pages/PostComposition";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostId,
  },
  {
    path: "/store",
    component: PostStore,
  },
  {
    path: "/composition",
    component: PostComposition,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
