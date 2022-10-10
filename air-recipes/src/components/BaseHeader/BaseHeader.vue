<template>
    <v-container
        class="pa-0 bg-white base-header"
        :style="{ height: height + 'px' }"
        fluid
    >
      <v-row class="ma-0 position-relative">
        <v-col
            class="base-content-container pa-0 v-col-lg-4 v-col-md-2 v-col-sm-12"
            style="z-index: 3"
        >
          <base-content
              @clickFilterButton="clickFilterButton"
              @searchRecipes="searchRecipes"
              :height="height"
          />
        </v-col>
        <v-col
              class="image-container pa-0 overflow-hidden v-col-lg-8 v-col-md-10 v-col-sm-12"
              :style="{ height: height + 'px'  }"
        >
          <header-image />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
  import BaseContent from "@/components/BaseHeader/BaseContent/BaseContent"
  import HeaderImage from "@/components/BaseHeader/HeaderImage"
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
  .base-header {
    position: fixed;
    z-index: 2;
  }
  .base-content-container {
    position: absolute;

    @media (max-width: 960px) {
      order: 2;
      margin-top: 12px;
    }
  }
  .image-container {
    position: absolute;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 960px) {
      display: none;
    }
  }
</style>