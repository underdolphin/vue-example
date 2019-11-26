<template lang="pug">
  div.user
    v-container
      v-form
        component(v-bind:is="currentView")
        v-row
          v-col
            v-btn(v-on:click="toCreateAccount" v-if="show") {{btnText}}          
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { VBtn, VContainer, VCol, VTextField, VForm, VRow } from "vuetify/lib";
import Login from "./Login.vue";
import UserCreate from "./UserCreate.vue";

@Component({
  components: {
    VBtn,
    VContainer,
    VCol,
    VTextField,
    VForm,
    VRow,
    Login,
    UserCreate
  }
})
export default class User extends Vue {
  currentView = "Login";
  btnText = "アカウント作成";
  show = true;
  toCreateAccount() {
    if ((this.currentView = "Login")) {
      this.show = false;
      this.currentView = "UserCreate";
    }
  }
}
</script>
<style lang="sass">
.user
  width : 100%
.user>*
  max-width : 720px
</style>