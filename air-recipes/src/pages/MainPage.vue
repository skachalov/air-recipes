<template>
  <my-header />
  <v-container fluid class="ps-16 pe-16">
    <v-row class="pt-8 justify-center">
        <base-card
            v-for="recipe in store.getters.getRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
    </v-row>
  </v-container>
</template>

<script setup>
  import MyHeader from "@/components/MainPage/BaseHeader/BaseHeader";
  import BaseCard from "@/components/MainPage/BaseCard/BaseCard"
  import { onMounted } from "vue";
  import { useStore } from "vuex"
  import {viewModel} from "@/storage";

  const store = useStore()

  onMounted(() => {
    viewModel.getRecipesViewModal().fetchRecipes()
  })
</script>

<style scoped>

</style>