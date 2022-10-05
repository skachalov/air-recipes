<template>
  <v-row
      class="align-end text"
      :class="{ 'sticky-header-search-bar': mainPageController.state.headerHeight.value < 450 }"
  >
    <v-col
        :class="{ 'v-col-9': mainPageController.state.headerHeight.value >= 450,
        'v-col-lg-6': mainPageController.state.headerHeight.value < 450 }"
        class="v-col-md-8 v-col-sm-6 v-col-xs-7"
    >
      <base-input
          class="input-container"
          v-model="mainPageController.state.searchLine.value"
          @keydown.enter="() => mainPageController.searchRecipes()"
      />
    </v-col>
    <v-col
        :class="{ 'v-col-3': mainPageController.state.headerHeight.value >= 450,
        'v-col-lg-3': mainPageController.state.headerHeight.value < 450 }"
        class="v-col-md-4 v-col-sm-2"
    >
      <filter-button
          @click="mainPageController.switchIsShownModal"
      />
    </v-col>
  </v-row>
</template>

<script setup>
  import FilterButton from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/FilterButton"
  import BaseInput from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/BaseInput"
  import mainPageController from "@/controllers/MainPageController"
</script>

<style lang="scss" scoped>
  .sticky-header-search-bar {
    margin-bottom: 1%;
    justify-content: end;
  }
  .text {
    @media (max-width: 960px) {
      display: flex;
      align-content: start;
      justify-content: center;
    }
  }
  .input-container {
    @media (max-width: 960px) {
      max-width: 400px !important;
    }
    @media (max-width: 600px) {
      max-width: 300px !important;
    }
    @media (max-width: 455px) {
      max-width: 250px !important;
    }
  }
</style>