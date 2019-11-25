<template lang="pug">
    div.login
      v-form(v-model="valid")
        v-container
          v-row
            v-col
              v-text-field(v-model="userid" label="userId")  
          v-row
            v-col
              v-text-field(v-model="password" label="password")           
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { VContainer, VCol, VTextField, VForm, VRow } from "vuetify/lib";
import axios from "axios";

@Component({
  components: {
    VContainer,
    VCol,
    VTextField,
    VForm,
    VRow
  }
})
export default class Login extends Vue {
  text = null;
  valid = false;
  userid = "";
  password = "";
  submitClick() {
    text: this.text;

    axios
      .get(`/api/test/${this.text}`)
      .then(res => {
        console.log(res.data.name);
      })
      .catch(err => console.log(err));
  }
}
</script>