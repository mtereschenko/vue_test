<template>
  <div>
    <div>
      {{ emails.list.join(', ') }}
    </div>
    <ul>
      <li v-for="email in emails.list">
        <div class="list_item">
          {{ email }}
          <RemoveButton :email="email" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import RemoveButton from './RemoveButton.vue';
import { defineComponent } from 'vue';
import { useEmailsStore } from "../stores/emails";

export default defineComponent({
  components: {
    RemoveButton
  },
  data() {
    return {
      emails: useEmailsStore()
    };
  }
})
</script>

<style>
  .list_item {
    display: grid;
    grid-template-columns: 11fr 1fr;
  }
</style>
