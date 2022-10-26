import { fetchGetRecipes } from "@/services/API/recipes"
import { viewModel } from "@/model/viewModelSingleton"
import { localStorageRepository } from "@/services/localStorageRepository"

export default {
    async fetchRecipes(context) {
        try {
            const response = await fetchGetRecipes()
            viewModel.getRecipesViewModal().setRecipes(response.data)
            localStorageRepository.setCuisines(context.getters.getCuisinesId)
            localStorageRepository.setCaloricity(context.getters.getCaloricityRange)
        }
        catch (e) {
            console.log(e)
        }
    },
    setRecipes({ commit }, recipes) {
        commit('setRecipes', recipes)
    },
    setSearchLine(context, searchLine) {
        localStorageRepository.setSearchLine(searchLine)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setCuisines(context, cuisinesIdxs) {
        localStorageRepository.setCuisines(cuisinesIdxs)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setCuisinesIncluded(context, cuisinesIdxs) {
        localStorageRepository.setCuisinesChosen(cuisinesIdxs)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setMaxAndMinCaloricity(context, caloricity) {
        localStorageRepository.setCaloricity(caloricity)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setMaxAndMinCaloricityChosen(context, caloricity) {
        localStorageRepository.setCaloricityChosen(caloricity)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setFilterParamsToDefault(context) {
        localStorageRepository.setParamsToDefault()
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    }
}