import Vue from "vue";
import store from "./store/index";
import $ from "jquery";
import axios from "axios";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/fontawesome-all.css";
import "./assets/css/animate.css";
import "./assets/css/base.css";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/js/velocity.min.js";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

Vue.config.productionTip = false;

window.$ = $;
window.axios = axios;

new Vue({
  render: h => h(App),
  store,
  created() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
    //
  }
}).$mount("#app");
