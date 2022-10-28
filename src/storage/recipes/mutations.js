export default {
    setRecipes(state, recipes) {
        state.recipes = recipes
        state.filteredRecipes = state.recipes
    },
    setFilteredRecipes(state, recipes) {
        state.filteredRecipes = recipes
    },
    setCuisinesList(state, cuisinesList) {
        state.cuisinesList = cuisinesList
    }
}