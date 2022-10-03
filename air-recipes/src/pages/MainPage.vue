<template>
  <v-container class="pt-0 ps-0 pe-0" fluid>
    <base-header :height="headerHeight" />
    <v-container class="ps-16 pe-16" fluid>
      <base-progress v-if="!store.state.recipes.recipes.length" />
      <v-row v-else class="pt-8 justify-center">
        <base-card
            v-for="recipe in [...store.getters.getRecipes, ...store.getters.getRecipes]"
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
  import { onMounted, ref } from "vue"
  import { useStore } from "vuex"
  import { viewModel } from "@/storage"

  const store = useStore()

  onMounted(() => {
    viewModel.getRecipesViewModal().fetchRecipes()
    window.addEventListener('scroll', changeHeaderHeight)
  })

  const DEFAULT_HEADER_HEIGHT = 600
  let headerHeight = ref(DEFAULT_HEADER_HEIGHT)

  function changeHeaderHeight() {
    let scrollVar = window.pageYOffset
    headerHeight.value = DEFAULT_HEADER_HEIGHT - scrollVar / 2
  }
</script>