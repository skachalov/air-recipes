import { localStorageRepository } from "@/services/localStorageRepository"

export default {
    getRecipes(state) {
        const regex = new RegExp('^' + localStorageRepository.getSearchLine(), 'i')
        const cuisineInChosenList = cuisineId =>
            localStorageRepository.getCuisinesIncludedChosen().includes(cuisineId)

        return state.recipes.filter(r => regex.test(r.title)
            && r.caloricity >= localStorageRepository.getCaloricityChosen().min
            && r.caloricity <= localStorageRepository.getCaloricityChosen().max
            && cuisineInChosenList(r.cuisine.id))
    }
}