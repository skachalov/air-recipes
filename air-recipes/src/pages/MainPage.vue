<template>
  <base-header />
  <v-container fluid class="ps-16 pe-16">
    <base-progress v-if="!store.state.recipes.recipes.length" />
    <v-row v-else class="pt-8 justify-center">
        <base-card
            v-for="recipe in store.getters.getRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
    </v-row>
  </v-container>
</template>

<script setup>
  import BaseHeader from "@/components/MainPage/BaseHeader/BaseHeader"
  import BaseCard from "@/components/MainPage/BaseCard/BaseCard"
  import BaseProgress from "@/components/BaseProgress"
  import { onMounted } from "vue"
  import { useStore } from "vuex"
  import { viewModel } from "@/storage"

  const store = useStore()

  onMounted(() => {
    viewModel.getRecipesViewModal().fetchRecipes()
  })
</script>