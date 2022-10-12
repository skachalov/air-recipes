<template>
  <v-range-slider
      class="base-slider"
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

<style>
  .base-slider .v-slider-thumb__label {
    transform: translateY(-15%) translateY(-1px) translateX(-50%) rotate(45deg) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    color: #fff;
    width: 32px;
    height: 34px;
    border-radius: 50% 50% 0;
    bottom: 100%;
    background-color: rgba(130, 120, 106, 1);
    user-select: none;
  }
  .base-slider .v-slider-thumb__label:before {
    display: none !important;
  }
  .base-slider .v-slider-thumb__label > div {
    transform: rotate(-45deg) !important;
  }
</style>