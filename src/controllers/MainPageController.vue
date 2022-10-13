<template>
  <main-page
      :getRecipes="$store.getters.getRecipes"
  />
</template>

<script setup>
  import MainPage from "@/pages/MainPage"
  import { onMounted } from "vue"
  import { viewModel } from "@/storage"

  onMounted(() => {
    viewModel.getRecipesViewModal().fetchRecipes()
  })
</script>