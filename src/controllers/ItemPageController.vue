<template>
    <item-page :recipe="$store.state.recipe.recipe"/>
</template>

<script setup>
    import { onMounted, onUnmounted } from "vue"
    import ItemPage from "@/pages/ItemPage"
    import { useRoute, useRouter } from "vue-router"
    import { viewModel } from "@/model/viewModelSingleton"
    import { mainPageRoute } from "@/const/routes"

    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
        try {
            await viewModel.getRecipeViewModal().fetchRecipe(route.params.id)
        }
        catch (e) {
            router.push(mainPageRoute)
        }
    })

    onUnmounted(() => {
        viewModel.getRecipeViewModal().clearRecipe()
    })
</script>