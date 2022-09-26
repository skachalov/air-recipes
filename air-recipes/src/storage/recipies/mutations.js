export default {
    setRecipes(state, recipes) {
        state.recipes = recipes.recipes
    },
    setCuisinesIncluded(state, cuisinesIdxs) {
        state.cuisinesIncludedDefault = [...cuisinesIdxs]
        state.cuisinesIncludedChoised = [...state.cuisinesIncludedDefault]
    },
    setMaxAndMinCaloricity(state, caloricity) {
        state.caloricityDefault = { min: caloricity.min, max: caloricity.max }
        state.caloricityChoised = {...state.caloricityDefault}
    }
}