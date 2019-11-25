import Vue from "vue";
import App from "./views/App.vue";
import vuetify from "./plugins/vuetify";

new Vue({
  vuetify,
  el: "#app",
  render: vue => vue(App)
});