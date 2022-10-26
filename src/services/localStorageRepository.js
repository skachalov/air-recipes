import { CALORICITY_PLACEHOLDER } from "@/const/statePlaceholders"
import Parser from "@/helpers/classes/parser"

class LocalStorageRepository {
    constructor() {
        localStorage.setItem("searchLine", "")
        localStorage.setItem("caloricityDefault", Parser.collectionToString(CALORICITY_PLACEHOLDER))
        localStorage.setItem("caloricityChosen", Parser.collectionToString(CALORICITY_PLACEHOLDER))
        localStorage.setItem("cuisinesIncludedDefault", Parser.collectionToString([]))
        localStorage.setItem("cuisinesIncludedChosen", Parser.collectionToString([]))
    }

    setSearchLine(searchLine) {
        localStorage.setItem("searchLine", searchLine)
    }

    getSearchLine() {
        return localStorage.getItem("searchLine")
    }

    setCaloricity(caloricity) {
        localStorage.setItem("caloricityDefault", Parser.collectionToString(caloricity))
        localStorage.setItem("caloricityChosen", Parser.collectionToString(caloricity))
    }

    setCaloricityChosen(caloricity) {
        localStorage.setItem("caloricityChosen", Parser.collectionToString(caloricity))
    }

    getCaloricityDefault() {
        return Parser.stringToCollection(localStorage.getItem("caloricityDefault"))
    }

    getCaloricityChosen() {
        return Parser.stringToCollection(localStorage.getItem("caloricityChosen"))
    }

    setCuisines(cuisines) {
        localStorage.setItem("cuisinesIncludedDefault", Parser.collectionToString(cuisines))
        localStorage.setItem("cuisinesIncludedChosen", Parser.collectionToString(cuisines))
    }

    setCuisinesChosen(cuisines) {
        localStorage.setItem("cuisinesIncludedChosen", Parser.collectionToString(cuisines))
    }

    getCuisinesIncludedDefault() {
        return Parser.stringToCollection(localStorage.getItem("cuisinesIncludedDefault"))
    }

    getCuisinesIncludedChosen() {
        return Parser.stringToCollection(localStorage.getItem("cuisinesIncludedChosen"))
    }

    setParamsToDefault() {
        localStorage.setItem("caloricityChosen", localStorage.getItem("caloricityDefault"))
        localStorage.setItem("cuisinesIncludedChosen", localStorage.getItem("cuisinesIncludedDefault"))
    }
}

export const localStorageRepository = new LocalStorageRepository()