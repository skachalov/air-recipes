<template>
  <v-container
      class="pa-0"
      :style="{ height: height + 'px' }"
      fluid
  >
    <v-row
        class="fixed-content"
    >
      <base-title :height="height" />
      <search-bar
          @clickFilterButton="clickFilterButton"
          @searchRecipes="searchRecipes"
          :height="height"
      />
    </v-row>
  </v-container>
</template>

<script setup>
  import BaseTitle from "@/components/BaseHeader/BaseContent/BaseTitle"
  import SearchBar from "@/components/BaseHeader/BaseContent/SearchBar/SearchBar"
  import { defineProps, defineEmits } from "vue"

  defineProps({
    height: Number
  })

  const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

  function clickFilterButton() {
    emits('clickFilterButton')
  }

  function searchRecipes(searchLine) {
    emits('searchRecipes', searchLine)
  }
</script>

<style lang="scss" scoped>
  .fixed-content {
    margin-top: 128px;
    margin-left: 98px;
    position: fixed;
    height: 192px;
    width: 348px;
  }
</style>
