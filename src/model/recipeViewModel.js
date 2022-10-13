export default class RecipeViewModel {
    constructor(recipeStore) {
        this._store = recipeStore
    }

    fetchRecipe(id) {
        this._store.dispatch("fetchRecipe", id)
    }

    setRecipe(recipe) {
        this._store.dispatch("setRecipe", recipe)
    }

    clearRecipe() {
        this._store.dispatch("clearRecipe")
    }
}