<template>
    <filter-modal
        :is-loaded="isLoaded"
        :cuisines="$store.state.recipes.cuisinesList"
        :selected-cuisines="includedCuisines"
        :caloricity-range="caloricityRange"
        :chosen-caloricity="chosenCaloricity"
        :show-clear-btn="showClearButton"
        @closeModal="closeModal"
        @clearParams="clearParams"
        @showRecipes="showRecipes"
        @updateSelected="updateSelected"
        @updateSelectedRange="updateSelectedRange"
    />
</template>

<script setup>
    import FilterModal from "@/components/FilterModal/FilterModal"
    import { ref, onMounted, computed } from "vue"
    import { useStore } from "vuex"
    import { useRoute, useRouter } from "vue-router"
    import { viewModel } from "@/model/viewModelSingleton"
    import { mainPageRoute } from "@/const/routes"
    import { compareArrays } from "@/helpers/compareArrays"
    import { localStorageRepository } from "@/services/localStorageRepository"

    const store = useStore()
    let isLoaded = ref(false)
    let includedCuisines = ref([])
    let caloricityRange = ref([])
    let chosenCaloricity = ref([])

    onMounted(  async () => {
        if (!store.state.recipes.recipes.length) {
            await viewModel.getRecipesViewModal().fetchRecipes()
        }
        isLoaded.value = true
        getChosenParams()
    })

    function getChosenParams() {
        includedCuisines.value = [...localStorageRepository.getCuisinesIncludedChosen()]
        caloricityRange.value =
            [localStorageRepository.getCaloricityChosen().min, localStorageRepository.getCaloricityChosen().max]
        chosenCaloricity.value = [...caloricityRange.value]
    }

    function closeModal() {
        viewModel.getModalViewModel().switchIsShownModal()
    }

    const showClearButton = computed(() => {
        if (!includedCuisines.value.length
            && !store.state.modal.isAnyFilter) return false

        return !(compareArrays(includedCuisines.value, localStorageRepository.getCuisinesIncludedDefault())
            && chosenCaloricity.value[0] === localStorageRepository.getCaloricityDefault().min
            && chosenCaloricity.value[1] === localStorageRepository.getCaloricityDefault().max)
    })

    function clearParams() {
        viewModel.getModalViewModel().changeIsAnyFilter(false)
        viewModel.getRecipesViewModal().setFilterParamsToDefault()
        getChosenParams()
        closeModal()
    }

    const route = useRoute()
    const router = useRouter()

    function showRecipes() {
        if (route.path !== mainPageRoute) {
            router.push(mainPageRoute)
        }

        viewModel.getRecipesViewModal().setCuisinesIncluded(includedCuisines.value)
        viewModel.getRecipesViewModal()
            .setMaxAndMinCaloricityChosen({min: chosenCaloricity.value[0], max: chosenCaloricity.value[1]})

        closeModal()
    }

    function updateSelected(val) {
        viewModel.getModalViewModel().changeIsAnyFilter(true)
        includedCuisines.value = includedCuisines.value.indexOf(val) === -1
            ? [...includedCuisines.value, (val)]
            : includedCuisines.value.filter(c => c !== val)
    }

    function updateSelectedRange(val) {
        viewModel.getModalViewModel().changeIsAnyFilter(true)
        chosenCaloricity.value = [...val]
    }
</script>