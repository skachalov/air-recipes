import RecipesViewModel from "@/model/recipesViewModel"
import RecipeViewModel from "@/model/recipeViewModel"
import ModalViewModel from "@/model/modalViewModel"
import store from "@/storage"

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

export const viewModel = new ViewModelSingleton(store)