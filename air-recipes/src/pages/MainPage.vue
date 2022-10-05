<template>
  <v-container class="pt-0 ps-0 pe-0 pb-16" fluid>
    <base-header />
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
  import BaseHeader from "@/components/MainPage/BaseHeader/BaseHeader"
  import BaseCard from "@/components/MainPage/BaseCard/BaseCard"
  import BaseProgress from "@/components/BaseProgress"
  import { onMounted, computed } from "vue"
  import mainPageController from "@/controllers/MainPageController"

  onMounted(() => {
    mainPageController.fetchRecipes()
    mainPageController.addResizeEvent()
    mainPageController.updateWidth()
    mainPageController.addScrollEvent()
  })

  const computeMargin = computed(() => mainPageController.computeMargin())
  const getRecipes = computed(() => mainPageController.getRecipes())
</script>