import {fetchGetRecipes} from "@/services/API/recipes";
import {viewModel} from "@/storage";

export default {
    async fetchRecipes(context) {
        try {
            const response = await fetchGetRecipes()
            viewModel.getRecipewViewModal().setRecipes(response.data)
            viewModel.getRecipewViewModal().setCuisinesIncluded(context.getters.getCuisinesId)
            viewModel.getRecipewViewModal().setMaxAndMinCaloricity(context.getters.getCaloricityRange)
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