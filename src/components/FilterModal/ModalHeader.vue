<template>
  <v-row class="modal-header">
    <v-col
        cols="10"
        style="font-size: 24px"
    >
      <h3>Filter</h3>
    </v-col>
    <v-col
        class="close-btn"
        cols="2"
    >
      <v-icon
          color="rgba(130, 120, 106, 1)"
          style="cursor: pointer"
          @click="closeModal"
      >
        mdi-close
      </v-icon>
    </v-col>
  </v-row>
</template>

<script setup>
  import { defineEmits } from "vue"

  const emits = defineEmits("closeModal")

  function closeModal() {
    emits("closeModal")
  }
</script>

<style scoped>
  .modal-header {
    height: 60px; padding-left: 16px;
    padding-right: 8px;
    margin-bottom: 28px;
  }
  .close-btn {
    display: flex;
    justify-content: end;
  }
</style>