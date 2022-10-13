<template>
    <v-container
        class="pa-0 bg-white"
        :style="{ height: height + 'px' }"
        :class="{ 'sticky-header': height <= 450 }"
        fluid
    >
      <v-row class="ma-0 position-relative">
        <v-col
            class="pa-0"
            :class="{ 'v-col-4': height > 450,
            'v-col-12': height <= 450 }"
        >
          <base-content
              @clickFilterButton="clickFilterButton"
              @searchRecipes="searchRecipes"
              :height="height"
          />
        </v-col>
        <v-col
               class="image-container pa-0 overflow-hidden"
               :class="{ 'v-col-8': height > 450 }"
               v-show="height > 450"
               :style="{ height: height + 'px' }"
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