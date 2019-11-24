<template lang="pug">
    div.main-content
        form(action)
            input(type="text" placeholder="text" v-model="text")
            input(type="button" value="decide" @click="submitClick")
        
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import axios from "axios";

@Component
export default class Test extends Vue {
  text = null;
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