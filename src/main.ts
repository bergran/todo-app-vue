import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

declare global {
  interface Window {
    __VUE_DEVTOOLS_GLOBAL_HOOK__: any;
  }
}

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development'


const app = new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor