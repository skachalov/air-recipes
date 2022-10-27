import { localStorageRepository } from "@/services/localStorageRepository"
import { SortingFactory } from "@/helpers/classes/sorting/SortingFactory"

export default {
    getRecipes(state) {
        const regex = new RegExp('^' + localStorageRepository.getSearchLine(), 'i')
        const cuisineInChosenList = cuisineId =>
            localStorageRepository.getCuisinesIncludedChosen().includes(cuisineId)

        const filtered = state.recipes.filter(r => regex.test(r.title)
            && r.caloricity >= localStorageRepository.getCaloricityChosen().min
            && r.caloricity <= localStorageRepository.getCaloricityChosen().max
            && cuisineInChosenList(r.cuisine.id))

        // factory pattern
        const sorting = SortingFactory.CreateSorting(localStorageRepository.getSortingType())
        return sorting.sort(filtered)
    }
}