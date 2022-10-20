import { fetchGetRecipe } from "@/services/API/recipe"
import { viewModel } from "@/model/viewModelSingleton"

export default {
    async fetchRecipe(context, id) {
        try {
            const response = await fetchGetRecipe(id)
            viewModel.getRecipeViewModal().setRecipe(response.data)
        }
        catch (e) {
            throw Error
        }
    },

    setRecipe({ commit }, recipe) {
        commit("setRecipe", recipe)
    },

    clearRecipe({ commit }) {
        commit("clearRecipe")
    }
}