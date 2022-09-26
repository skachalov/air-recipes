export default {
    setRecipes(state, recipes) {
        state.recipes = recipes.recipes
    },
    setCuisinesIncluded(state, cuisinesIdxs) {
        state.cuisinesIncludedDefault = [...cuisinesIdxs]
        state.cuisinesIncludedChosen = [...state.cuisinesIncludedDefault]
    },
    setMaxAndMinCaloricity(state, caloricity) {
        state.caloricityDefault = { min: caloricity.min, max: caloricity.max }
        state.caloricityChosen = {...state.caloricityDefault}
    },
    setFilterParamsToDefault(state) {
        state.searchLine = ""
        state.cuisinesIncludedChoised = [ ...state.cuisinesIncludedDefault ]
        state.caloricityChosen = { ...state.caloricityDefault }
    }
}