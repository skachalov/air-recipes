import {createStore} from "vuex";
import recipes from "@/storage/recipes";
import recipe from "@/storage/recipe";
import RecipesViewModel from "@/model/recipesViewModel";
import RecipeViewModel from "@/model/recipeViewModel";

const store = createStore({
    modules: {
        recipes,
        recipe
    }
})

class ViewModelSingleton {
    static _instance = null
    constructor(store) {
        if (!ViewModelSingleton._instance) {
            ViewModelSingleton._instance = this
            this._recipesViewModal = new RecipesViewModel(store)
            this._recipeViewModal = new RecipeViewModel(store)
        }
    }
    getRecipesViewModal() {
        return this._recipesViewModal
    }
    getRecipeViewModal() {
        return this._recipeViewModal
    }
}

export default store
export const viewModel = new ViewModelSingleton(store)