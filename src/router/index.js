import Vue from "vue";
import VueRouter from "vue-router";
import transitionRouter from "./router-transition";

// 引入扩展函数
// import transitionExtend from "./transition-extend";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/page2",
    name: "page2",
    meta: {
      // transition: "",
    },
    component: () => import("../views/page2.vue"),
    children: [
      {
        path: "page2-1",
        name: "page2-1",
        component: () => import("../views/page2-1.vue"),
      },
    ],
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("../views/page3.vue"),
  },
];

let router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default transitionRouter(router);
