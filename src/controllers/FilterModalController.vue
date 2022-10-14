<template>
    <filter-modal
        :cuisines="store.getters.getCuisines"
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
    import { compareArrays } from "@/helpers/compareArrays"
    import { ref, onMounted, computed } from "vue"
    import { useStore } from "vuex"
    import { useRoute, useRouter } from "vue-router"
    import { viewModel } from "@/model/viewModelSingleton"

    const store = useStore()
    let includedCuisines = ref([])
    let caloricityRange = ref([])
    let chosenCaloricity = ref([])

    onMounted(() => {
        getChosenParams()
    })

    function getChosenParams() {
        includedCuisines.value = [...store.state.recipes.cuisinesIncludedChosen]
        caloricityRange.value =
            [store.state.recipes.caloricityChosen.min, store.state.recipes.caloricityChosen.max]
        chosenCaloricity.value = [...caloricityRange.value]
    }

    function closeModal() {
        viewModel.getModalViewModel().switchIsShownModal()
    }

    const showClearButton = computed(() => {
        if (!store.state.modal.isAnyFilter) return false

        return !(compareArrays(includedCuisines.value, store.state.recipes.cuisinesIncludedDefault)
            && chosenCaloricity.value[0] === store.state.recipes.caloricityDefault.min
            && chosenCaloricity.value[1] === store.state.recipes.caloricityDefault.max)
    })

    function getDefaultParams() {
        includedCuisines.value = [...store.state.recipes.cuisinesIncludedDefault]
        caloricityRange.value =
            [store.state.recipes.caloricityDefault.min, store.state.recipes.caloricityDefault.max]
        chosenCaloricity.value = [...caloricityRange.value]
    }

    function clearParams() {
        viewModel.getModalViewModel().changeIsAnyFilter(false)
        getDefaultParams()
    }

    const route = useRoute()
    const router = useRouter()

    function showRecipes() {
        if (route.path !== '/air-recipes/') {
            router.push('/air-recipes/')
        }

        viewModel.getRecipesViewModal().setCuisinesIncluded(includedCuisines.value)
        viewModel.getRecipesViewModal()
            .setMaxAndMinCaloricityChosen({min: chosenCaloricity.value[0], max: chosenCaloricity.value[1]})
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