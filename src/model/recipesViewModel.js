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

    setCuisinesList(cuisinesList) {
        this._store.dispatch("setCuisinesList", cuisinesList)
    }

    setCuisinesIncluded(cuisinesIdxs) {
        this._store.dispatch("setCuisinesIncluded", cuisinesIdxs)
    }

    setMaxAndMinCaloricityChosen(caloricity) {
        this._store.dispatch("setMaxAndMinCaloricityChosen", caloricity)
    }

    setFilterParamsToDefault() {
        this._store.dispatch("setFilterParamsToDefault")
    }
}