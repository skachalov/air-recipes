<template>
    <item-page :recipe="$store.state.recipe.recipe"/>
</template>

<script setup>
    import { onMounted, onUnmounted } from "vue"
    import ItemPage from "@/pages/ItemPage"
    import { useRoute } from "vue-router"
    import { viewModel } from "@/model/viewModelSingleton"

    const route = useRoute()

    onMounted(() => {
        viewModel.getRecipeViewModal().fetchRecipe(route.params.id)
    })

    onUnmounted(() => {
        viewModel.getRecipeViewModal().clearRecipe()
    })
</script>