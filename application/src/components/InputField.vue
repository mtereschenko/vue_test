<template>
  <div>
    <form @submit.prevent="addEmail">
      <input type="email" v-model="email">
      <button>Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useEmailsStore } from "../stores/emails";

export default defineComponent({
  data(){
    return {
      email: '',
      emails: useEmailsStore()
    }
  },
  methods: {
    addEmail() {
      this.emails.addItem(this.email);
      this.email = '';
    }
  }
})
</script>
