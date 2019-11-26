import Vue from "vue";
import App from "./views/App.vue";
import router from './router'
import vuetify from "./plugins/vuetify";

new Vue({
  vuetify,
  router,
  el: "#app",
  render: vue => vue(App)
});