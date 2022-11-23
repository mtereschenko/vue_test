<template>
  <button class="remove_button" @click="removeEmail">X</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useEmailsStore } from "../stores/emails";

export default defineComponent({
  props: {
    email: {
      type: String,
      required: true,
    }
  },
  data(){
    return {
      emails: useEmailsStore()
    }
  },
  methods: {
    removeEmail() {
      this.emails.removeItem(this.email);
    }
  }
})
</script>

<style>
  .remove_button {
    max-width: 30px;
  }
</style>
