<template>
  <v-btn
      :class="{ dark: isDark, light: !isDark }"
      variant="outlined"
  >
    <slot />
  </v-btn>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    isDark: Boolean
  })
</script>

<style scoped>
  .dark {
    background-color: #82786A;
    color: white;
  }
  .light {
    border-color: #DDDDDD;
    color: #82786A;
  }
</style>