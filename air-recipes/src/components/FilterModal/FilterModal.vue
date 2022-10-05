<template>
  <v-container
      class="container"
      @click.self="closeModal"
      fluid
  >
    <div class="modal"></div>
  </v-container>
</template>

<script setup>
  import { defineEmits } from "vue"

  const emits = defineEmits(['closeModal'])

  function closeModal() {
    emits('closeModal')
  }
</script>

<style scoped>
  .container {
    position: fixed;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .modal {
    position: fixed;
    height: 558px;
    width: 440px;
    background-color: white;
    z-index: 4;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.14);
  }
</style>