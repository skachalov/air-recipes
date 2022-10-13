export default {
    setRecipe(state, recipe) {
        state.recipe = recipe.recipe
    },

    clearRecipe(state) {
        state.recipe = null
    }
}
