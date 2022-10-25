import { localStorageInterface } from "@/localStorage/localStorageInterface"

export default {
    getRecipes(state) {
        const regex = new RegExp('^' + localStorageInterface.getSearchLine(), 'i')
        const cuisineInChosenList = cuisineId =>
            localStorageInterface.getCuisinesIncludedChosen().includes(cuisineId)

        return state.recipes.filter(r => regex.test(r.title)
            && r.caloricity >= localStorageInterface.getCaloricityChosen().min
            && r.caloricity <= localStorageInterface.getCaloricityChosen().max
            && cuisineInChosenList(r.cuisine.id))
    },
    getCuisines(state) {
        const cuisines = state.recipes.map(r => r.cuisine)

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
    },
    getCuisinesId(state, getters) {
        return getters.getCuisines.map(c => c.id)
    },
    getCaloricityRange(state) {
        const calories = state.recipes.map(r => r.caloricity)
        return { min: Math.min(...calories), max: Math.max(...calories) }
    }
}