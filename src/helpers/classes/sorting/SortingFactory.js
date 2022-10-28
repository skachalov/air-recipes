import SortingType from "@/helpers/classes/sorting/SortingType"
import SortingTitle from "@/helpers/classes/sorting/SortingTitle"
import SortingCaloricity from "@/helpers/classes/sorting/SortingCaloricity"
import SortingTime from "@/helpers/classes/sorting/SortingTime"

export class SortingFactory {
    static CreateSorting(sortingType) {
        switch (sortingType) {
            case (SortingType.title): {
                return new SortingTitle()
            }
            case (SortingType.caloricity): {
                return new SortingCaloricity()
            }
            case (SortingType.time): {
                return new SortingTime()
            }
        }
    }
}