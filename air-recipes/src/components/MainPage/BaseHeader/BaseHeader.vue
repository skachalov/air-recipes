<template>
    <v-container
        class="pa-0 bg-white"
        :style="{ height: mainPageController.state.headerHeight.value + 'px'}"
        :class="{ 'sticky-header': mainPageController.state.headerHeight.value <= 450 }"
        fluid
    >
      <v-row class="ma-0 position-relative">
        <v-col
            class="pa-0"
            :class="{ 'v-col-4': mainPageController.state.headerHeight.value > 450,
            'v-col-12': mainPageController.state.headerHeight.value <= 450 }"
        >
          <base-content />
        </v-col>
        <v-col
               class="image-container pa-0 overflow-hidden"
               :class="{ 'v-col-8': mainPageController.state.headerHeight.value > 450 }"
               v-show="mainPageController.state.headerHeight.value > 450"
               :style="{ height: mainPageController.state.headerHeight.value + 'px' }"
        >
          <header-image />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
  import BaseContent from "@/components/MainPage/BaseHeader/BaseContent/BaseContent"
  import HeaderImage from "@/components/MainPage/BaseHeader/HeaderImage"
  import mainPageController from "@/controllers/MainPageController"
</script>

<style scoped>
  .sticky-header {
    position: fixed;
    top: -272px;
    z-index: 1;
  }
  .image-container {
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>