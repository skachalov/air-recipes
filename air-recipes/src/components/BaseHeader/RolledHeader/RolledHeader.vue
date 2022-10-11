<template>
  <v-container class="rolled-header pt-0 pb-0 pe-0" fluid>
    <v-row>
      <v-col
        class="title-container v-col-md-6 v-col-12"
      >
        <app-title />
      </v-col>
      <v-col class="search-bar-container v-col-md-6 v-col-12">
        <search-bar
            @clickFilterButton="clickFilterButton"
            @searchRecipes="searchRecipes"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import SearchBar from "@/components/BaseHeader/BaseContent/SearchBar/SearchBar"
  import AppTitle from "@/components/BaseHeader/BaseContent/AppTitle"
  import { defineEmits } from "vue"

  const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

  function clickFilterButton() {
    emits('clickFilterButton')
  }

  function searchRecipes(searchLine) {
    emits('searchRecipes', searchLine)
  }
</script>

<style lang="scss" scoped>
  .rolled-header {
    display: flex;
    align-items: center;
    height: 80px;
    background-color: white;
    position: fixed;
    z-index: 2;
    padding-left: 98px;

    @media(max-width: 960px) {
      height: 180px !important;
      padding-left: 0;
    }
  }
  .title-container {
    @media(max-width: 960px) {
      width: 100% !important;
      padding-bottom: 0 !important;
      display: flex;
      justify-content: center;
    }
  }
  .search-bar-container {
    display: flex;
    align-items: center;
    justify-content: end;

    @media(max-width: 960px) {
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>