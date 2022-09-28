import {fetchGetRecipes} from "@/services/API/recipes";
import {viewModel} from "@/storage";

export default {
    async fetchRecipes(context) {
        try {
            const response = await fetchGetRecipes()
            viewModel.getRecipesViewModal().setRecipes(response.data)
            viewModel.getRecipesViewModal().setCuisinesIncluded(context.getters.getCuisinesId)
            viewModel.getRecipesViewModal().setMaxAndMinCaloricity(context.getters.getCaloricityRange)
        }
        catch (e) {
            console.log(e)
        }
    },
    setRecipes({ commit }, recipes) {
        commit('setRecipes', recipes)
    },
    setCuisinesIncluded({ commit }, cuisinesIdxs) {
        commit('setCuisinesIncluded', cuisinesIdxs)
    },
    setMaxAndMinCaloricity({ commit }, caloricity) {
        commit('setMaxAndMinCaloricity', caloricity)
    },
    setFilterParamsToDefault({ commit }) {
        commit('setFilterParamsToDefault')
    }
}