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
  import { useStore } from "vuex"
  import { ref, onMounted, computed } from "vue"
  import { viewModel } from "@/model/viewModelSingleton"
  import { compareArrays } from "@/helpers/compareArrays"
  import { useRoute, useRouter } from "vue-router";

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

  const route = useRoute()
  const router = useRouter()

  function showRecipes() {

    viewModel.getRecipesViewModal().setCuisinesIncluded(includedCuisines.value)
    viewModel.getRecipesViewModal()
        .setMaxAndMinCaloricityChosen({ min: chosenCaloricity.value[0], max: chosenCaloricity.value[1] })

    if (route.path !== '/') {
      router.push('/')
      console.log('pushed')
    }
  }

  const showClearButton = computed(() => {
    return !(compareArrays(includedCuisines.value, store.state.recipes.cuisinesIncludedDefault)
        && chosenCaloricity.value[0] === store.state.recipes.caloricityDefault.min
        && chosenCaloricity.value[1] === store.state.recipes.caloricityDefault.max)
  })

  function updateSelected(val) {
    includedCuisines.value = includedCuisines.value.indexOf(val) === -1
      ? [...includedCuisines.value, (val)]
      : includedCuisines.value.filter(c => c !== val)
  }

  function updateSelectedRange(val) {
    chosenCaloricity.value = [...val]
  }
</script>