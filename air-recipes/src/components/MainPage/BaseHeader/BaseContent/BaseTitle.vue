<template>
    <v-row
        style="height: 104px; width: 331px;"
        class="ma-0 title-container"
        :class="{ 'padding': mainPageController.state.headerHeight.value <= 450 }"
    >
      <v-row
          style="height: 80px; width: 331px"
          class="ma-0 justify-center"
      >
        <h1 class="title">Air Recipes</h1>
      </v-row>
      <v-row
          style="width: 206px" class="ma-0"
          v-if="mainPageController.state.headerHeight.value > 450"
      >
        <span class="description">Best Recipes for Best People</span>
      </v-row>
    </v-row>
</template>

<script setup>
  import mainPageController from "@/controllers/MainPageController"
</script>

<style lang="scss" scoped>
  .title-container {
    @media (max-width: 960px) {
      padding-left: 0 !important;
      width: 100% !important;
      height: 75px !important;
    }
    @media (max-width: 600px) {
      height: 25px !important;
    }
  }
  .title {
    font-size: 64px;
    width: 100%;

    @media(max-width: 960px) {
      width: auto !important;
    }
    @media (max-width: 600px) {
      font-size: 48px;
    }
  }
  .description {
    font-family: Roboto;
    color: #82786A
  }
  .padding {
    padding-left: 98px;
  }
</style>