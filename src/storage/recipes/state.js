import { CALORICITY_PLACEHOLDER } from "@/const/statePlaceholders"

export default {
    recipes: [],
    searchLine: "",
    caloricityDefault: { ...CALORICITY_PLACEHOLDER },
    caloricityChosen: { ...CALORICITY_PLACEHOLDER },
    cuisinesIncludedDefault: [],
    cuisinesIncludedChosen: []
}