import { ISorting } from "@/helpers/classes/sorting/ISorting"

export default class SortingTime extends ISorting {
    sort(recipes) {
        return recipes.sort((a, b) => a.cookTime - b.cookTime)
    }
}