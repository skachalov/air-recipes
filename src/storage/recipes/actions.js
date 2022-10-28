import { fetchGetRecipes } from "@/services/API/recipes"
import { localStorageRepository } from "@/services/localStorageRepository"
import RecipesParametersSetter from "@/helpers/classes/RecipesParametersSetter"

export default {
    async fetchRecipes(context) {
        try {
            const response = await fetchGetRecipes()

            // facade pattern
            RecipesParametersSetter.SetParameters(response.data.recipes)

            context.commit("setFilteredRecipes", context.getters.getRecipes)
        }
        catch (e) {
            console.log(e)
        }
    },
    setRecipes({ commit }, recipes) {
        commit("setRecipes", recipes)
    },
    setCuisinesList({ commit }, cuisinesList) {
      commit("setCuisinesList", cuisinesList)
    },
    setSearchLine(context, searchLine) {
        localStorageRepository.setSearchLine(searchLine)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setSortingType(context, sortingType) {
        localStorageRepository.setSortingType(sortingType)
        context.commit("setFilteredRecipes", context.getters.getRecipes)
    },
    setCuisinesIncluded(context, cuisinesIdxs) {
        localStorageRepository.setCuisinesChosen(cuisinesIdxs)
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