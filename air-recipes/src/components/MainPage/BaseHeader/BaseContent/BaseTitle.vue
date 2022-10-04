<template>
    <v-row
        style="height: 104px; width: 331px;"
        class="ma-0 title-container"
        :class="{ 'padding': height <= 450 }"
    >
      <v-row
          style="height: 80px; width: 331px"
          class="ma-0 justify-center"
      >
        <h1 class="title">Air Recipes</h1>
      </v-row>
      <v-row
          style="width: 206px" class="ma-0"
          v-if="height > 450"
      >
        <span class="description">Best Recipes for Best People</span>
      </v-row>
    </v-row>
</template>

<script setup>
  import { defineProps } from "vue"

  defineProps({
    height: Number
  })
</script>

<style scoped>
  .title {
    font-size: 64px;
  }
  .description {
    font-family: Roboto;
    color: #82786A
  }
  .padding {
    padding-left: 98px;
  }
  @media (max-width: 960px) {
    .title-container {
      padding-left: 0;
      width: 100% !important;
      height: 75px !important;
    }
  }
  @media (max-width: 600px) {
    .title {
      font-size: 48px;
    }
    .title-container {
      height: 50px !important;
    }
  }
</style>