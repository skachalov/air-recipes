<template>
  <v-container
      class="pa-0"
      :style="{ height: mainPageController.state.headerHeight.value + 'px' }"
      fluid
  >
    <v-row
        class="screen-960"
        :class="{ 'fixed-content': mainPageController.state.headerHeight.value >= 500,
        'sticky-bottom-content': mainPageController.state.headerHeight.value < 500
          && mainPageController.state.headerHeight.value >= 450,
        'sticky-header-content': mainPageController.state.headerHeight.value < 450 }"
    >
      <base-title />
      <search-bar />
    </v-row>
  </v-container>
</template>

<script setup>
  import BaseTitle from "@/components/MainPage/BaseHeader/BaseContent/BaseTitle";
  import SearchBar from "@/components/MainPage/BaseHeader/BaseContent/SearchBar/SearchBar";
  import mainPageController from "@/controllers/MainPageController"
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
