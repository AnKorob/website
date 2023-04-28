import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CourcesPage from "@/views/CourcesPage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";

Vue.use(Router);
let router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: [
    {
      path: "/",
      name: "Homepage",
      component: HomePage,
      props: true,
      // children: [
      //   {
      //     path: "/Contacts",
      //     component: ContactsBlock,
      //     props: true,
      //   },
      //   {
      //     path: "/FeedBack",
      //     component: FeedbackBlock,
      //     props: true,
      //   },
      // ],
    },
    // {
    //   path: "/ContactUs",
    //   name: "ContactsBlock",
    //   component: ContactsBlock,
    // },
    // {
    //   path: "/FeedBack",
    //   name: "FeedbackBlock",
    //   component: FeedbackBlock,
    // },
    {
      path: "/Portfolio",
      name: "Portfolio",
      component: PortfolioPage,
      props: true,
    },
    {
      path: "/Cources",
      name: "Cources",
      component: CourcesPage,
      props: true,
    },
  ],
});
export default router;
