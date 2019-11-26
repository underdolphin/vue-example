<template lang="pug">
  div.usercreate
    h2 アカウント作成
    v-container
      v-row
        v-col
          v-text-field(v-model="accountID" label="Input your ID" :rules="[rules.required]" )
      v-row
        v-col
          v-text-field(v-model="password" 
                          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" 
                          :rules="[rules.required]" label="Password"
                          :type="passwordShow ? 'text' : 'password'"
                          @click:append="passwordShow = !passwordShow"
                          autocomplete="off")
      v-row
        v-col
          v-btn 登録
                    
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { VBtn, VContainer, VCol, VTextField, VForm, VRow } from "vuetify/lib";

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
export default class UserCreate extends Vue {
  passwordShow = false;
  accountID = "";
  password = "";
  rules = {
    required: value => !!value || "Required."
  };
}
</script>