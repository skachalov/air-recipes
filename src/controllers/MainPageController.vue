<template>
    <main-page :getRecipes="$store.getters.getRecipes"/>
</template>

<script setup>
    import MainPage from "@/pages/MainPage"
    import { onMounted } from "vue"
    import { useStore } from "vuex"
    import { viewModel } from "@/model/viewModelSingleton"
    import { useRouter } from "vue-router"
    import { mainPageRoute } from "@/const/routes"

    const store = useStore()
    const router = useRouter()

    onMounted(() => {
        if (router.currentRoute.value.fullPath !== mainPageRoute) {
            router.push(mainPageRoute)
        }
        if (!store.state.recipes.recipes.length) {
            viewModel.getRecipesViewModal().fetchRecipes()
        }
    })
</script>