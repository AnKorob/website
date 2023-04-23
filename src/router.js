import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Cources from "@/views/Cources";
import Portfolio from "@/views/Portfolio";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Portfolio",
      component: () => import("./views/Portfolio.vue"),
    },
    {
      path: "/Cources",
      component: () => import("./views/Cources.vue"),
    },
  ],
});
