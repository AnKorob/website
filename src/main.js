import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import scrollDirective from "@/directives/scroll";

Vue.config.productionTip = false;
Vue.directive("scroll", scrollDirective);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
