export default class RecipesViewModel {
    constructor(recipesStore) {
        this._store = recipesStore
    }

    setRecipes(recipes) {
        this._store.dispatch("setRecipes", recipes)
    }

    setCuisinesIncluded(cuisinesIdxs) {
        this._store.dispatch("setCuisinesIncluded", cuisinesIdxs)
    }

    setMaxAndMinCaloricity(caloricity) {
        this._store.dispatch("setMaxAndMinCaloricity", caloricity)
    }

    setFilterParamsToDefault() {
        this._store.dispatch("setFilterParamsToDefault")
    }
}