export default {
    setRecipes(state, recipes) {
        state.recipes = recipes.recipes
        state.filteredRecipes = state.recipes
    },
    setFilteredRecipes(state, recipes) {
        state.filteredRecipes = recipes
    }
}