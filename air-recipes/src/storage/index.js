import {createStore} from "vuex";
import recipes from "@/storage/recipes";
import RecipesViewModel from "@/model/recipesViewModel";

const store = createStore({
    modules: {
        recipes
    }
})

class ViewModelSingleton {
    static _instance = null
    constructor(store) {
        if (!ViewModelSingleton._instance) {
            ViewModelSingleton._instance = this
            this._recipesViewModal = new RecipesViewModel(store)
        }
    }
    getRecipewViewModal() {
        return this._recipesViewModal
    }
}

export default store
export const viewModel = new ViewModelSingleton(store)