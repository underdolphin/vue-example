<template lang="pug">
  div#app
    div#nav
      router-link(to="/user/") Login
    router-view
</template>
<style lang="sass">
#app
  text-align: center
</style>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { VContainer, VCol, VTextField, VForm, VRow } from "vuetify/lib";
import Login from "./Login.vue";

@Component({
  components: {
    VContainer,
    VCol,
    VTextField,
    VForm,
    VRow,
    Login
  }
})
export default class App extends Vue {
  currentView = "Login";
}
</script>