<template>
  <div
      :style="{ color }"
      class="base-info"
  >
    <v-icon
        :style="{ color }"
        class="base-info-icon"
        :icon="iconName"
    />
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
  .base-info {
    margin-right: 33px;
  }
  .base-info-icon {
    color: rgba(200, 200, 200, 1);
    margin-right: 10px;
  }
</style>