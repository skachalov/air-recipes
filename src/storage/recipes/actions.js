import { fetchGetRecipes } from "@/services/API/recipes"
import { viewModel } from "@/model/viewModelSingleton"
import { localStorageInterface } from "@/localStorage/localStorageInterface"

export default {
    async fetchRecipes(context) {
        try {
            const response = await fetchGetRecipes()
            viewModel.getRecipesViewModal().setRecipes(response.data)
            localStorageInterface.setCuisines(context.getters.getCuisinesId)
            localStorageInterface.setCaloricity(context.getters.getCaloricityRange)
        }
        catch (e) {
            console.log(e)
        }
    },
    setRecipes({ commit }, recipes) {
        commit('setRecipes', recipes)
    },
    setSearchLine(context, searchLine) {
        localStorageInterface.setSearchLine(searchLine)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setCuisines(context, cuisinesIdxs) {
        localStorageInterface.setCuisines(cuisinesIdxs)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setCuisinesIncluded(context, cuisinesIdxs) {
        localStorageInterface.setCuisinesChosen(cuisinesIdxs)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setMaxAndMinCaloricity(context, caloricity) {
        localStorageInterface.setCaloricity(caloricity)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setMaxAndMinCaloricityChosen(context, caloricity) {
        localStorageInterface.setCaloricityChosen(caloricity)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setFilterParamsToDefault(context) {
        localStorageInterface.setParamsToDefault()
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    }
}