<template>
    <v-row
        style="height: 104px; width: 331px;"
        class="ma-0 title-container"
    >
      <v-row
          style="height: 80px; width: 100%"
          class="ma-0 justify-center"
      >
        <h1 class="title">Air Recipes</h1>
      </v-row>
      <v-row
          class="ma-0"
      >
        <span
            style="width: 100%"
            class="description"
        >
          Best Recipes for Best People
        </span>
      </v-row>
    </v-row>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    height: Number
  })
</script>

<style lang="scss" scoped>
  .title-container {
    @media (max-width: 960px) {
      padding-left: 0 !important;
      width: 100% !important;
    }
  }
  .title {
    font-family: "Gilroy ExtraBold";
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
    color: #82786A;

    @media(max-width: 960px) {
      display: flex;
      justify-content: center;
    }
  }
  .padding {
    padding-left: 98px;
  }
</style>