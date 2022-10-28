import { ISorting } from "@/helpers/classes/sorting/ISorting"

export default class SortingCaloricity extends ISorting {
    sort(recipes) {
        return recipes.sort((a, b) => a.caloricity - b.caloricity)
    }
}