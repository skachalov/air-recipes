import {fetchGetRecipe} from "@/services/API/recipe";
import {viewModel} from "@/storage";

export default {
    async fetchRecipe(context, id) {
        try {
            const response = await fetchGetRecipe(id)
            viewModel.getRecipeViewModal().setRecipe(response.data)

        }
        catch (e) {
            console.log(e)
        }
    },

    setRecipe({ commit }, recipe) {
        commit("setRecipe", recipe)
    }
}