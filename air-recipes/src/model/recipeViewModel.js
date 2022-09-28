export default class RecipeViewModel {
    constructor(recipeStore) {
        this._store = recipeStore
    }

    setRecipe(recipe) {
        this._store.dispatch("setRecipe", recipe)
    }
}