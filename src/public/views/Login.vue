<template lang="pug">
    div.login
      h2 ログイン
      v-form
        v-container
          v-row
            v-col
              v-text-field(v-model="accountID" :rules="[rules.required]" label="ID")  
          v-row
            v-col
              v-text-field(v-model="password" 
                            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" 
                            :rules="[rules.required]"
                            :type="passwordShow ? 'text' : 'password'"
                            @click:append="passwordShow = !passwordShow"
                            label="Password")
          v-row
            v-col
              v-btn サインイン          
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { VBtn, VContainer, VCol, VTextField, VForm, VRow } from "vuetify/lib";
//import axios from "axios";

@Component({
  components: {
    VBtn,
    VContainer,
    VCol,
    VTextField,
    VForm,
    VRow
  }
})
export default class Login extends Vue {
  passwordShow = false;
  accountID = "";
  password = "";
  rules = {
    required: value => !!value || "Required."
  };
  // submitClick() {
  //   text: this.text;

  //   axios
  //     .get(`/api/test/${this.text}`)
  //     .then(res => {
  //       console.log(res.data.name);
  //     })
  //     .catch(err => console.log(err));
  // }
}
</script>