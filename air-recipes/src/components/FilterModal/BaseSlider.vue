<template>
  <v-range-slider
      class="slider"
      color="#82786A"
      thumb-size="12px"
      thumb-label="always"
      track-size="2px"
      :min="range.min"
      :max="range.max"
      :model-value="modelValue"
      @update:modelValue="updateInput"
      step="5"
  />
</template>

<script setup>
  import { defineProps, defineEmits } from "vue"

  defineProps({
    range: Object,
    modelValue: Array
  })

  const emit = defineEmits(["update:modelValue"])

  function updateInput(event) {
    emit("update:modelValue", event)
  }
</script>