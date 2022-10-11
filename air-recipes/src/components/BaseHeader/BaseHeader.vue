<template>
  <full-header
      :height="height"
      @clickFilterButton="clickFilterButton"
      @searchRecipes="searchRecipes"
      v-if="height > 292 && innerWidth > 960"
  />
  <rolled-header
      v-else
      @clickFilterButton="clickFilterButton"
      @searchRecipes="searchRecipes"
  />
</template>

<script setup>
  import { defineProps, defineEmits } from "vue"
  import FullHeader from "@/components/BaseHeader/FullHeader"
  import RolledHeader from "@/components/BaseHeader/RolledHeader/RolledHeader"

  defineProps({
    height: Number,
    innerWidth: Number
  })

  const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

  function clickFilterButton() {
    emits('clickFilterButton')
  }

  function searchRecipes(searchLine) {
    emits('searchRecipes', searchLine)
  }
</script>