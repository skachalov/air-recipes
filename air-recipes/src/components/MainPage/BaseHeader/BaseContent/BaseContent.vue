<template>
  <v-container
      class="pa-0"
      :style="{ height: height + 'px' }"
      fluid
  >
    <v-row
        class="screen-960"
        :class="{ 'fixed-content': height >= 500,
        'sticky-bottom-content': height < 500 && height >= 450,
        'sticky-header-content': height < 450 }"
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
  import BaseTitle from "@/components/MainPage/BaseHeader/BaseContent/BaseTitle"
  import SearchBar from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/SearchBar"
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
  .sticky-bottom-content {
    position: absolute;
    height: 192px;
    width: 348px;
    bottom: 0;
    margin-left: 98px;
  }
  .sticky-header-content {
    position: absolute;
    display: flex;
    align-items: end;
    height: 200px;
    width: 100%;
    bottom: 0;
  }
  .screen-960 {
    @media (max-width: 960px) {
      margin-left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
