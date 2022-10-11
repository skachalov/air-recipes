<template>
  <v-range-slider
      class="slider"
      color="#82786A"
      thumb-size="12px"
      thumb-label="always"
      track-size="2px"
      :min="range.min"
      :max="range.max"
      :model-value="selected"
      @update:modelValue="updateSelectedRange"
      step="5"
  />
</template>

<script setup>
  import { defineProps, defineEmits } from "vue"

  defineProps({
    range: Object,
    selected: Array
  })

  const emit = defineEmits(["updateSelectedRange"])

  function updateSelectedRange(event) {
    emit("updateSelectedRange", event)
  }
</script>