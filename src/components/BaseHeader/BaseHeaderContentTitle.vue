<template>
    <v-row
        style="height: 104px; width: 331px;"
        class="base-header-title"
        :class="{ 'base-header-title-rolled': height <= 192 }"
    >
      <v-row
          style="height: 80px; width: 100%"
          class="ma-0 justify-center"
          :class="{ 'full-height': height <= 192 }"
      >
        <h1
            class="title"
            :class="{ 'full-height title-rolled' : height <= 192 }"
        >
          Air Recipes
        </h1>
      </v-row>
      <v-row class="ma-0">
        <span
            style="width: 100%"
            class="description"
            v-if="height > 200"
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
  .base-header-title {
    margin: 0;

    @media (max-width: 960px) {
      width: 100% !important;
      margin-bottom: 8px;
    }
  }
  .base-header-title-rolled {
    height: 100% !important;
    align-items: center;
  }
  .full-height {
    height: 100% !important;
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
  .title-rolled {
    align-items: center;
    display: flex;
  }
  .description {
    font-family: Roboto;
    color: #82786A;
  }
  .padding {
    padding-left: 98px;
  }
</style>