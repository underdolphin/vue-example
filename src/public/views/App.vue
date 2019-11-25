<template lang="pug">
    div#main-content
      div#nav
        component(v-bind:is="currentView")
</template>
<style lang="sass">

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