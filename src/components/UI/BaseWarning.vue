<template>
  <h2 class="base-warn">{{ warn }}</h2>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    warn: String
  })
</script>

<style scoped>
  .base-warn {
    font-family: "Gilroy ExtraBold";
    font-size: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>