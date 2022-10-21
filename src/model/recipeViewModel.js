export default class RecipeViewModel {
    constructor(recipeStore) {
        this._store = recipeStore
    }

    async fetchRecipe(id) {
        try {
            await this._store.dispatch("fetchRecipe", id)
        }
        catch {
            throw Error
        }
    }

    setRecipe(recipe) {
        this._store.dispatch("setRecipe", recipe)
    }

    clearRecipe() {
        this._store.dispatch("clearRecipe")
    }
}