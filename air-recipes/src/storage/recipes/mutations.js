export default {
    setRecipes(state, recipes) {
        state.recipes = recipes.recipes
    },
    setSearchLine(state, searchLine) {
      state.searchLine = searchLine
    },
    setCuisines(state, cuisinesIdxs) {
        state.cuisinesIncludedDefault = [...cuisinesIdxs]
        state.cuisinesIncludedChosen = [...state.cuisinesIncludedDefault]
    },
    setCuisinesIncluded(state, cuisinesIdxs) {
        state.cuisinesIncludedChosen = [...cuisinesIdxs]
    },
    setMaxAndMinCaloricity(state, caloricity) {
        state.caloricityDefault = { min: caloricity.min, max: caloricity.max }
        state.caloricityChosen = {...state.caloricityDefault}
    },
    setMaxAndMinCaloricityChosen(state, caloricity) {
        state.caloricityChosen = { min: caloricity.min, max: caloricity.max }
    },
    setFilterParamsToDefault(state) {
        state.cuisinesIncludedChosen = [ ...state.cuisinesIncludedDefault ]
        state.caloricityChosen = { ...state.caloricityDefault }
    }
}