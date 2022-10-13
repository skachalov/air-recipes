import {createStore} from "vuex";
import recipes from "@/storage/recipes";
import recipe from "@/storage/recipe";
import modal from "@/storage/modal";
import RecipesViewModel from "@/model/recipesViewModel";
import RecipeViewModel from "@/model/recipeViewModel";
import ModalViewModel from "@/model/modalViewModel";

const store = createStore({
    modules: {
        recipes,
        recipe,
        modal
    }
})

class ViewModelSingleton {
    static _instance = null
    constructor(store) {
        if (!ViewModelSingleton._instance) {
            ViewModelSingleton._instance = this
            this._recipesViewModal = new RecipesViewModel(store)
            this._recipeViewModal = new RecipeViewModel(store)
            this._modalViewModel = new ModalViewModel(store)
        }
    }
    getRecipesViewModal() {
        return this._recipesViewModal
    }
    getRecipeViewModal() {
        return this._recipeViewModal
    }
    getModalViewModel() {
        return this._modalViewModel
    }
}

export default store
export const viewModel = new ViewModelSingleton(store)