import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      redirect: "/home",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/About.vue"),
        },
        {
          path: "/crazy",
          name: "crazy",
          component: () => import("../views/Crazy.vue"),
        },
        {
          path: "/friends",
          name: "friends",
          component: () => import("../views/Friends.vue"),
        },
        {
          path: "/tools",
          name: "tools",
          component: () => import("../views/Tools.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/Signin.vue"),
    },
  ],
});

export default router;
