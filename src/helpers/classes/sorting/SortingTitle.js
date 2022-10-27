import { ISorting } from "@/helpers/classes/sorting/ISorting"

export default class SortingTitle extends ISorting {
    sort(recipes) {
        return recipes.sort((a, b) => {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        })
    }
}