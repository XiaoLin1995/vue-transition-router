import Vue from "vue";
import { NavBar, Cell } from "vant";
import "animate.css";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(NavBar);
Vue.use(Cell);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
