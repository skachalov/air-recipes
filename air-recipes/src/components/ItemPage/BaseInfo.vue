<template>
  <div :style="{ color }">
    <v-icon
        :style="{ color }"
        class="base-info-icon"
        :icon="iconName"
    ></v-icon>
    <slot />
  </div>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    iconName: String,
    color: String
  })
</script>

<style scoped>
  .base-info-icon {
    color: rgba(200, 200, 200, 1);
    margin-right: 10px;
  }
</style>