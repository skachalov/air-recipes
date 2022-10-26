import { viewModel } from "@/model/viewModelSingleton"
import {localStorageRepository} from "@/services/localStorageRepository"

export default class RecipesParametersSetter {
    static SetParameters(recipes) {
        viewModel.getRecipesViewModal().setRecipes(recipes)

        const cuisinesList = this.getCuisines(recipes)
        viewModel.getRecipesViewModal().setCuisinesList(cuisinesList)
        localStorageRepository.setCuisines(this.getCuisinesId(cuisinesList))

        localStorageRepository.setCaloricity(this.getCaloricityRange(recipes))
    }

    static getCuisines(recipes) {
        const cuisines = recipes.map(r => r.cuisine)

        let cuisinesUniqueId =
            cuisines.reduce((prev, cur) => prev.indexOf(cur.id) === -1 ? [...prev, cur.id] : prev, [])

        return cuisines.filter(c => {
            const idx = cuisinesUniqueId.indexOf(c.id)
            if (idx === -1) {
                return false
            }
            cuisinesUniqueId =
                cuisinesUniqueId.splice(0, idx).concat(cuisinesUniqueId.splice(idx + 1))
            return true
        })
    }

    static getCuisinesId(cuisines) {
        return cuisines.map(c => c.id)
    }

    static getCaloricityRange(recipes) {
        const calories = recipes.map(r => r.caloricity)
        return { min: Math.min(...calories), max: Math.max(...calories) }
    }
}