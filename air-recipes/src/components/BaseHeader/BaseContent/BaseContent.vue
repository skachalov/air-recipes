<template>
  <v-container
      class="pa-0"
      :style="{ height: height + 'px' }"
      fluid
  >
    <v-row
        class="base-content"
        :class="{ 'fixed-content': height > 292,
        'sticky-bottom-content': height <= 292 }"
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
  .base-content {
    @media (max-width: 960px) {
      width: 100% !important;
      margin-left: 0 !important;
    }
  }
  .fixed-content {
    margin-top: 128px;
    margin-left: 98px;
    position: fixed;
    height: 192px;
    width: 348px;
  }
  .sticky-bottom-content {
    position: absolute;
    height: 192px;
    width: 348px;
    bottom: -14px;
    margin-left: 98px;
  }
</style>
