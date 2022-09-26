export default {
    setRecipes(state, recipes) {
        state.recipes = recipes
    },
    setCuisinesIncluded(state, cuisinesIdxs) {
        state.cuisineIncludedDefault = cuisinesIdxs
    },
    setMaxAndMinCaloricity(state, caloricity) {
        state.minCaloricityDefault = caloricity.min
        state.maxCaloricityDefault = caloricity.max
    }
}