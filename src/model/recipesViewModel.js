export default class RecipesViewModel {
    constructor(recipesStore) {
        this._store = recipesStore
    }

    async fetchRecipes() {
        await this._store.dispatch('fetchRecipes')
    }

    setRecipes(recipes) {
        this._store.dispatch("setRecipes", recipes)
    }

    setSearchLine(searchLine) {
        this._store.dispatch('setSearchLine', searchLine)
    }

    setCuisines(cuisinesIdxs) {
        this._store.dispatch("setCuisines", cuisinesIdxs)
    }

    setCuisinesIncluded(cuisinesIdxs) {
        this._store.dispatch("setCuisinesIncluded", cuisinesIdxs)
    }

    setMaxAndMinCaloricity(caloricity) {
        this._store.dispatch("setMaxAndMinCaloricity", caloricity)
    }

    setMaxAndMinCaloricityChosen(caloricity) {
        this._store.dispatch("setMaxAndMinCaloricityChosen", caloricity)
    }

    setFilterParamsToDefault() {
        this._store.dispatch("setFilterParamsToDefault")
    }
}