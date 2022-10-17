<template>
    <main-page :getRecipes="$store.getters.getRecipes"/>
</template>

<script setup>
    import MainPage from "@/pages/MainPage"
    import { onMounted } from "vue"
    import { useStore } from "vuex"
    import { viewModel } from "@/model/viewModelSingleton"

    const store = useStore()

    onMounted(() => {
        if (!store.state.recipes.recipes.length) {
            viewModel.getRecipesViewModal().fetchRecipes()
        }
    })
</script>