<template>
  <v-container class="pt-0 ps-0 pe-0 pb-16" fluid>
    <base-header
        @clickFilterButton="clickFilterButton"
        @searchRecipes="searchRecipes"
        :height="height"
    />
    <v-container class="ps-16 pe-16" fluid>
      <base-progress v-if="!getRecipes.length" />
      <v-row
          v-else
          class="pt-8 justify-center"
          :style="{ 'margin-top': computeMargin }"
      >
        <base-card
            v-for="recipe in getRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
      </v-row>
    </v-container>
    </v-container>
</template>

<script setup>
  import BaseCard from "@/components/MainPage/BaseCard/BaseCard"
  import BaseProgress from "@/components/BaseProgress"
  import BaseHeader from "@/components/MainPage/BaseHeader/BaseHeader"
  import { defineEmits, defineProps } from "vue"

  defineProps({
    height: Number,
    getRecipes: Array,
    computeMargin: String
  })

  const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

  function clickFilterButton() {
    emits('clickFilterButton')
  }

  function searchRecipes(searchLine) {
    emits('searchRecipes', searchLine)
  }
</script>