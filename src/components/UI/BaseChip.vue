<template>
  <v-chip
      class="base-chip"
      variant="filter"
  >
    {{ text }}
  </v-chip>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    text: String
  })
</script>

<style lang="scss" scoped>
  .base-chip {
    background-color: white;
    cursor: pointer;

    @media (max-width: 420px) {
      font-size: 11px;
    }
  }
</style>