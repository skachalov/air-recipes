import { fetchGetRecipes } from "@/services/API/recipes"
import { viewModel } from "@/model/viewModelSingleton"

export default {
    async fetchRecipes(context) {
        try {
            const response = await fetchGetRecipes()
            viewModel.getRecipesViewModal().setRecipes(response.data)
            viewModel.getRecipesViewModal().setCuisines(context.getters.getCuisinesId)
            viewModel.getRecipesViewModal().setMaxAndMinCaloricity(context.getters.getCaloricityRange)
        }
        catch (e) {
            console.log(e)
        }
    },
    setRecipes({ commit }, recipes) {
        commit('setRecipes', recipes)
    },
    setSearchLine({ commit }, searchLine) {
        commit('setSearchLine', searchLine)
    },
    setCuisines({ commit }, cuisinesIdxs) {
        commit('setCuisines', cuisinesIdxs)
    },
    setCuisinesIncluded({ commit }, cuisinesIdxs) {
        commit('setCuisinesIncluded', cuisinesIdxs)
    },
    setMaxAndMinCaloricity({ commit }, caloricity) {
        commit('setMaxAndMinCaloricity', caloricity)
    },
    setMaxAndMinCaloricityChosen({ commit }, caloricity) {
        commit('setMaxAndMinCaloricityChosen', caloricity)
    },
    setFilterParamsToDefault({ commit }) {
        commit('setFilterParamsToDefault')
    }
}