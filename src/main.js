import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuesax from 'vuesax'
Vue.config.productionTip = false;


import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'; // Material Icons


Vue.use(Vuesax, {
  // options here
});



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
