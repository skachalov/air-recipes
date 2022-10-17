<template>
<<<<<<< HEAD
  <item-page
      :recipe="$store.state.recipe.recipe"
  />
</template>

<script setup>
import { onMounted, onUnmounted } from "vue"
import ItemPage from "@/pages/ItemPage"
import { useRoute } from 'vue-router'
import { viewModel } from "@/storage"

const route = useRoute()

onMounted(() => {
  viewModel.getRecipeViewModal().fetchRecipe(route.params.id)
})

onUnmounted(() => {
  viewModel.getRecipeViewModal().clearRecipe()
})
=======
    <item-page :recipe="$store.state.recipe.recipe"/>
</template>

<script setup>
    import { onMounted, onUnmounted } from "vue"
    import ItemPage from "@/pages/ItemPage"
    import { useRoute } from "vue-router"
    import { useStore } from "vuex"
    import { viewModel } from "@/model/viewModelSingleton"

    const store = useStore()

    const route = useRoute()

    onMounted(() => {
        if (!store.state.recipes.recipes.length) {
            viewModel.getRecipesViewModal().fetchRecipes()
        }

        viewModel.getRecipeViewModal().fetchRecipe(route.params.id)
    })

    onUnmounted(() => {
        viewModel.getRecipeViewModal().clearRecipe()
    })
>>>>>>> recipes-5-refactoring
</script>