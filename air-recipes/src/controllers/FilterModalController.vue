<template>
  <filter-modal
      :cuisines="store.getters.getCuisines"
      :selected-cuisines="includedCuisines"
      :caloricity-range="caloricityRange"
      :chosen-caloricity="chosenCaloricity"
      @closeModal="closeModal"
      @clearParams="clearParams"
      @showRecipes="showRecipes"
      @updateSelected="updateSelected"
      @updateSelectedRange="updateSelectedRange"
  />
</template>

<script setup>
  import FilterModal from "@/components/FilterModal/FilterModal"
  import { useStore } from "vuex"
  import { ref, onMounted } from "vue"
  import { viewModel } from "@/storage"

  const store = useStore()
  let includedCuisines = ref([])
  let caloricityRange = ref([])
  let chosenCaloricity = ref([])

  onMounted(() => {
    getDefaultParams()
  })

  function getDefaultParams() {
    includedCuisines.value = [...store.state.recipes.cuisinesIncludedChosen]
    caloricityRange.value =
        [store.state.recipes.caloricityChosen.min, store.state.recipes.caloricityChosen.max]
    chosenCaloricity.value = [...caloricityRange.value]
  }

  function closeModal() {
    viewModel.getModalViewModel().switchIsShownModal()
  }

  function clearParams() {
    viewModel.getRecipesViewModal().setFilterParamsToDefault()
    getDefaultParams()
  }

  function showRecipes() {
    viewModel.getRecipesViewModal().setCuisinesIncluded(includedCuisines.value)
    viewModel.getRecipesViewModal()
        .setMaxAndMinCaloricityChosen({ min: chosenCaloricity.value[0], max: chosenCaloricity.value[1] })
    closeModal()
  }

  function updateSelected(val) {
    includedCuisines.value = includedCuisines.value.indexOf(val) === -1
      ? [...includedCuisines.value, (val)]
      : includedCuisines.value.filter(c => c !== val)
  }

  function updateSelectedRange(val) {
    chosenCaloricity.value = [...val]
  }
</script>