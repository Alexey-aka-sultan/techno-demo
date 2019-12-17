import Vue from 'vue'
import store from './store/index'
import $ from 'jquery';

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/fontawesome-all.css'
import './assets/css/animate.css'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/js/velocity.min.js'

Vue.config.productionTip = false

window.$ = $;

new Vue({
  render: h => h(App),
  store,
  created() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
    // 
    
  },
}).$mount('#app')
